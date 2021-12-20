Setup
===
1. `yarn install`

2. Create a .env.development file in the root directory with the following:

    ```
    AMPLITUDE_KEY=...
    STRIPE_API_KEY=...
    BUGSNAG_API_KEY=...
    FIREBASE_API_KEY=...
    ```

3. `yarn watch` (by default runs on port 8082)

Lottie Animation
===
## Export settings
* Skip default properties: true
* Remove expression properties: true

Favicons
===
https://realfavicongenerator.net/

Testing with Backend
===
$ STRIPE_API_KEY=sk_test_... stripe listen --forward-to localhost:5001/lipsurf-216216/us-central1/stripeWebhook

Size Monitoring
===
Uncomment `SizePlugin` in vue.config.js