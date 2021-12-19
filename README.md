TODO:
===
- [ ] TOS
* add email form so user can get a link later
* New features should work this way:
    * no need to calibrate setup. Works out of the box straight-away.
    * Embeddable in any site
    * Improve your Workflow - dont search through menubars for functionality -- just say it
    * Shortcuts - Do things that would otherwise take multiple time-consuming steps with a single voice command (gifv of add event to google calendar)
    * Internationalization -

Lottie Animation:
===
Export settings:
* Skip default properties: true
* Remove expression properties: true

Favicons:
===
https://realfavicongenerator.net/

Testing with Backend
===
$ STRIPE_API_KEY=sk_test_... stripe listen --forward-to localhost:5001/lipsurf-216216/us-central1/stripeWebhook

Size Monitoring
===
Uncomment `SizePlugin` in vue.config.js