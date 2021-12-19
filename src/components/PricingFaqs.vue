<template>
    <v-row row justify-center>
        <v-col xl8>
            <section>
                <h1 class="display-2" style="margin-bottom: 2rem">FAQs</h1>
                <v-expansion-panels flat v-model="faqExpansion">
                    <v-expansion-panel>
                        <v-expansion-panel-header>Will my data be private and safe?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>Yes. We are not in the business of selling data. Our business is supported directly by paying subscribers.
                            <br>
                            <br>
                            Aside from your email address, we do not store any of your personal identifiable data. Furthermore, we do not store or process any of your voice data on our servers. 
                            <br>
                            <br>
                            See <router-link :to="{name: 'privacy'}">our privacy policy</router-link> for the nitty-gritty details. We use Google APIs to transcribe your speech, please see <a class="external" target="_blank" href="https://policies.google.com/privacy?hl=en-GB&gl=uk">their privacy policy</a> for more details.</v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Can I use my subscription on multiple computers or devices?
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Yes. You may install LipSurf on multiple personal computers (up to 6) and sign-in with the same LipSurf account associated with your subscription.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>What if the price goes up and I'm already subscribed?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>It's likely the subscription price will increase in the future as new features are added. When it happens, we will "grandfather" you in your plan — meaning we will honor the previous, lesser price for you.</v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>How can I save money on my plan?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>If you subscribe for a year upfront you can save 25% (equivalent to 3 free months).
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>What about nonprofits?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>Nonprofits are eligible for bulk discounts. <router-link :to="{name: 'contact'}">Get in touch</router-link> for details. </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header id="wakeWordDetails">What is a "wake-word"?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>A wake word is like "OK Google" or "Alexa" that allows you to turn on LipSurf without clicking the extension button, instead you can turn on LipSurf completely hands free. 
                            The wake word is <span class="voice-cmd">Hey LipSurf</span>. 
                            <br><br>
                            Our wake-word technology is provided by <a class="external" href="https://picovoice.ai" target="_blank">PicoVoice</a> and works completely offline (for privacy reasons) with minimal system resources.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>What are community plugins?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>Community plugins are plugins that can be created by anyone (3rd parties). See <a class="external" href="https://github.com/lipsurf/plugins" target="_blank">our GitHub</a> for details.</v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>What features are coming soon?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>We have many things in the pipeline but we don't want to say they're official until we've validated them. <a href="https://discuss.lipsurf.com">Write on our forums</a> if there's a feature you really want!</v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Do you have any special plans for schools or organizations?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>Yes! <router-link :to="{name: 'contact'}">Contact us for details</router-link>.</v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Can I upgrade/downgrade at any time?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>Yes. To downgrade, go to the LipSurf options and click "Change Subscription" or <router-link :to="{name: 'contact'}">contact us</router-link> at any time for assistance.</v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>What is your cancellation policy?</v-expansion-panel-header>
                        <v-expansion-panel-content eager>You may cancel at any time and we will stop your subscription before the next billing period. Go to the LipSurf options and click "Change Subscription" or <router-link :to="{name: 'contact'}">contact us</router-link> to cancel.</v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </section>
            <section>
                <p>Lingering questions? <router-link :to="{name: 'contact'}">Contact us</router-link>.</p>
            </section>
        </v-col>
    </v-row>
</template>

<style>
.v-expansion-panel-header {
    color: #484848;
    font-weight: 500;
}
.v-expansion-panel-header:hover {
    color: var(--light-text-color) !important;
}
.v-expansion-panels .v-expansion-panel:not(:first-child) {
    border-top: 1px solid #ddd;
    border-radius: 0px;
}
.v-item-group.theme--light.v-expansion-panels.v-expansion-panels--flat {
    background: white;
}
</style>

<style scoped>
section {
    margin-top: 80px;
}
</style>

<script lang="ts" setup>

const props = defineProps({
    faqExpansion: {
        default: -1,
        type: Number,
    }
});
</script>