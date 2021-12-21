<template>
  <BaseLayout>
    <v-container>
      <v-row row justify-center>
          <div style="max-width: 960px">
        <h1>Privacy Policy</h1>
        <em>Last Updated December 9, 2021.</em>

        <p class="mute">Added section for "Children's Information" and "Personal Data Security".</p>
        <p>
          LipSurf Inc. ("LipSurf") is very serious and especially careful about your personal privacy and the materials we send you using your contact information. We understand our users trust that we keep their data safe and don't use any data irresponsibly. </p>
        <p>We don't collect user data with any intention of profiting from the data by selling or sharing with third parties. Any data collected is solely used for improving LipSurf internally.
        </p>
        <p>
          By visiting the LipSurf website (<a href="https://www.lipsurf.com">https://www.lipsurf.com</a>) or using our Google Chrome Extension, you are accepting the practices outlined in this Privacy Policy.
        </p>
        <section>
          <h3>What data is being collected?</h3>
          <p>
            We collect the following data (“Personal Information”):
            <ul>
              <li>E-mail</li>
              <li>How many times you "activate" LipSurf (by clicking the LipSurf Chrome Extension button in the toolbar).</li>
              <li>The names of the commands that you run, and how many times you've run them.
                <ul>
                  <li>The exact phrasing you used to execute the command is not collected. (eg. for the Google search command, we only record that you ran a Google search, not <strong>what</strong> you searched for. We will never know what you specifically searched for.)</li>
                  <li>Things you say before or after the command are not collected.</li>
                  <li>The protocol, host and path of the URL that the command is ran on <strong>is</strong> collected. Any other parts of the URL are stripped away in case they have private information.</li>

                </ul>
              </li>
              <li>Errors that occur when you use LipSurf are collected and sent to us along with your e-mail (if you've provided it). Errors contain only the relevant contextual information to find and fix the bug that may have occurred.</li>
              <li>When certain actions are taken within the context of LipSurf. This includes but is not limited to:
                <ul>
                  <li>When you install/uninstall LipSurf.</li>
                  <li>When a "you need to upgrade..." type message is shown.</li>
                  <li>When the options or tutorial pages are shown.</li>
                </ul>
              </li>
              <li>(optional) Custom homophones, synonyms or shortcuts that you've created and elected to share the data with us on.</li>
            </ul>
          </p>
        </section>
        <section>
          <h3>What happens in the event of a change of ownership?</h3>
          <p>If LipSurf is involved in a merger, acquisition or asset sale, your Personal Information may be transferred. We will provide notice before your Personal Information is transferred and becomes subject to a different Privacy Policy if you have not unsubscribed to our communications.</p>
        </section>
        <section>
          <h3>Who is collecting the data?</h3>
          <p>We only take in the minimum data we need to improve LipSurf. We don’t give or sell data to any third parties. Your data may be transferred to a new owner in case of a change of ownership of LipSurf itself (see above).</p>
        </section>
        <section>
          <h3>How will the data be used?</h3>
          <p>We use your e-mail (if provided) to determine if bugs and or commands are occurring in aggregate among many users. We use the data about the commands you've used and how many times you've activated LipSurf to make LipSurf better fit demands and needs. We may potentially use your e-mail for marketing purposes, although we've not done this yet. You may unsubscribe from our marketing e-mails at any time, although it’s unlikely that you’ll need to because we don’t really send any marketing e-mails.</p>
        </section>
        <section>
          <h3>How long will the data be stored for?</h3>
          <p>The number of times you activate LipSurf and the names of the commands you run are stored for up to 30 days.</p>
          <p>We keep your e-mail on file indefinitely. You can send us an e-mail anytime at privacy@lipsurf.com to irreversibly erase your account (e-mail address). You will receive confirmation from us to proceed with the process.</p>
        </section>
        <section>
          <h3>Personal Data Security</h3>
          <p>
          LipSurf uses cloud services and data processors on secure servers provided by an organization certified under both the EU-U.S. and Swiss-U.S. Privacy Shield Frameworks and thereby guarantees an appropriate standard of data protection from unauthorized access and operates to an appropriate standard of data security.
          </p>
          <p>
          All data is accessed via secure connections.
          </p>
          <p>
          In spite of our efforts to establish a secure environment for the website, related products and services, you should be aware that no information is completely secure on the internet. Therefore, you should always take the necessary safeguards on your own equipment.
          </p>
        </section>
        <section>
          <h3>Children’s Information</h3>
          <p>We take children’s privacy seriously. </p>
          <p>Our privacy practices are guided by the United States' Children's Online Privacy Protection Act of 1998, as well as data privacy laws in the United States and other applicable countries. Younger visitors should always check with their parents or guardians before entering information on any website and we encourage families to discuss their household guidelines regarding online sharing of personal information.</p>
          <p>
          We do not knowingly collect personal information from children through the Website. If you are a minor under the laws of your country, please do not submit any personal information through the Website or relevant services without the express consent and participation of a parent or guardian.
          </p>
          <h4>Parental Controls</h4>
          <p>
          At any time, you can refuse to permit us to collect personal information from your child and can request that we delete from our records the personal information we have collected. If you have any questions or concerns about our approach to children's privacy, you want to access the data of your child, or request the deletion of your child's data, please contact us at privacy@lipsurf.com. 
          </p>
        </section>
        <section>
          <h3>Cookies</h3>
          <p>Cookies are very small text files that are stored on your computer when you visit some websites.</p>
          <p>Cookies are only used when you visit our website (<a href="https://www.lipsurf.com">https://www.lipsurf.com</a>). We don't use cookies in our Google Chrome Extension.</p>
          <p>We use a combination of session cookies and persistent cookies in order to track how you use and experience our website, build anonymous statistical data about how our website is performing, and to power the personalization of website content to you.</p>
        </section>
        <section>
          <h3>Changes to this Privacy Policy</h3>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </section>
        </div>
      </v-row>
    </v-container>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from "./BaseLayout.vue";

export default {
  components: {
    BaseLayout,
  },
}
</script>

