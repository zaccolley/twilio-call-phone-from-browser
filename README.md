# twilio browser to phone (softphone)

_based on [twilio-client-quicker-starter](https://github.com/choppen5/twilio-client-quicker-starter) ported to node cause i couldnt find any simple examples_

## twilio

- Log into your Twilio account, note the following items,
	- Your Twilio Account Sid
	- Your Twilio Auth Token
	- A Twilio Phone Number
	- Now, the hard one. Creating a new Twilio App.  In your Twilio account, navigate here
	  - Account > Dev Tools > Twiml Apps (or <https://www.twilio.com/user/account/apps>).  
	  - Press the "Create Twiml App" button.  Give your App a Friendly Name, such as "Hello Monkey". We will fill out the Voice URL later, after pressing the Heroku button.  
		- After creating the Twiml App, note the App Sid (need to click on the name of the Twiml App to see the Application Sid).

## install

# with Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

You will be asked for a few parameters, all of which you have in hand from the previous steps.

# self hosted

put your environment variables in a .env file instead

## post install

Take your new Heroku URL that you just created (for example http://funky-monkey-567.herokuapp.com) and:

* Locate the Twilio Twiml App application you created in the pre reqs (Find this in your Twilio account DevTools > Twiml Apps or <https://www.twilio.com/user/account/apps>)
  * Update Twilio App Voice "Request URL": http://funky-monkey-567.herokuapp.com/voice. This is the action that will be called when a user presses the "Call" button on the webpage.  
