#!/usr/bin/env python3.8
# sudo apt install parallel jpegoptim
# pip install awscli
import subprocess
import click
import os

# Manually edited s3 objects
EXCLUDE = ['kingsandgenerals']
NODE_VERSION = '12.18.3'

@click.command()
@click.option('--dev/--prod', default=False)
def deploy(dev):
    with open('../.env') as f:
        lines = f.readlines()
        env_vars = {arr[0]: arr[1] for arr in map(lambda x: x.strip().split('='), lines)}
        env_vars.update({'NODE_ENV': 'production'})
        subprocess.check_call(os.path.expanduser(f'~/.nvm/versions/node/v{NODE_VERSION}/bin/node') + f' /usr/share/yarn/bin/yarn.js build', \
                env=env_vars, shell=True)
    subprocess.check_output("find ./dist -name '*.png' | xargs parallel optipng -o7 -preserve -strip all --", shell=True)
    subprocess.check_output("find ./dist -name '*.jpg' | xargs parallel jpegoptim --", shell=True)
    if dev:
        bucket_name = 'lipsurf-dev'
    else:
        bucket_name = 'lipsurf'

    run_in_bucket = lambda *args: os.system(' '.join(args + ('--profile', 'LipSurf', './dist', f's3://{bucket_name}/',)))

    overwrite_meta = lambda *args: os.system(' '.join(args + tuple(map(lambda x: '--exclude ' + x, EXCLUDE))
        + ('--metadata-directive', 'REPLACE', '--profile', 'LipSurf', f's3://{bucket_name}/', f's3://{bucket_name}/',)))

    subprocess.check_output('cp vendor/favicon_package_v0.16/* dist/', shell=True)

    print('not deleting extraneous')
    # setting cache from here wont work because only new files that need to be copied will get the directive
    run_in_bucket('aws', 's3', 'sync') # --delete (to delete extraneous)

    print('updating baseline attributes')
    overwrite_meta('aws', 's3', 'cp', '--recursive',
            '--cache-control', 'max-age=365000000',
            )

    print('updating html cache directives')
    overwrite_meta('aws', 's3', 'cp', '--recursive',
        '--exclude', "'*'", '--include', "'*.html'",
        '--content-type', "'text/html; charset=utf-8'",
        '--cache-control', 'no-cache',)

    print('updating image cache directives')
    overwrite_meta('aws', 's3', 'cp', '--recursive',
        '--exclude', '"*"', '--include', '"*.jpg"', '--include', '"*.png"',
        '--include', '"*.ico"', '--include', '"*.xml"', '--include', '"*.svg"',
        '--cache-control', 'max-age=43200')

    if not dev:
        subprocess.check_output(['aws', 'cloudfront', 'create-invalidation',
                '--distribution-id', 'EJPRSUJ7NPN82', '--paths', '/*', '--profile',
                'LipSurf'])

    print(f'Successfully deployed to {bucket_name}!')


if __name__ == '__main__':
    deploy()
