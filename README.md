# twilio browser to phone (softphone)

_this is completely this example [twilio-client-quicker-starter](https://github.com/choppen5/twilio-client-quicker-starter) but instead of ruby it's node, cause i couldnt find any simple starter examples_

## preinstall

from your Twilio account, you'll need:
- AccountSID (starts with AC, found in your [account settings](https://www.twilio.com/user/account/settings))
- AuthToken (found in your [account settings](https://www.twilio.com/user/account/settings))
- a Twilio phone number (found in the [phone numbers section](https://www.twilio.com/user/account/phone-numbers/incoming))

now create a new TwiML app

1. [Programmable Voice > Dev Tools > Twiml Apps (Create TwiML app)](https://www.twilio.com/user/account/voice/dev-tools/twiml-apps/add)  
2. the voice URL will be where your app is hosted (heroku or otherwise)
3. note the App Sid, we'll need this for later 

## install

### with Heroku

use this one click button woah
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

you will be asked for a few parameters, all of which you have in hand from the previous steps.

### self hosted

1. `npm install` - install any dependancies
2. put your environment variables in a .env file instead (.env-example) gives you an example
3. `node server.js` - run the server.js file however you'd like

## post install

1. get your hosted application url (for example http://funky-monkey-567.herokuapp.com)
2. add your url `/voice` to 'Request URL' (e.g http://funky-monkey-567.herokuapp.com/voice)

## tips

- if things are going wrong you can enable debug for twilio, there's normally decent errors to google
- make sure to use prefixes for your numbers (e.g uk is +44)
