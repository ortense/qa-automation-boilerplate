# QA Automation boilerplate

A minimal setup for mobile test automation

## Tools inside this project

- [Appium](http://appium.io/)
- [Cucumber](https://cucumber.io/)
- [WD.js](https://www.npmjs.com/package/wd)

## How to install

1. Download and install [Android Studio](https://developer.android.com/studio).
2. Start Android Studio, and go through the "Android Studio Setup Wizard". This installs the latest Android SDK, Android SDK 
Command-line Tools, and Android SDK Build-Tools, which are required by Flutter when developing for Android.
3. Intall [Node.js](https://nodejs.org/)
4. Clone this repository and install the project dependencies with the command `npm install`

## Check the installation

Use the command `npm run appium-doctor` to check possible installation problems.

## Run tests on Android

1. Start Android Studio, click in "Configure" > "AVD Manager" and create or start an Android Emulator

2. Update the file `config\android.js` with your emulator name.

3. Run the command `npm test`

## Create your own tests

1. Save your `.apk` file in `apps` folder

2. Update the file `config\android.js` with your app name.

3. Create a `.feature` file in root of features folder with [gherkin syntax](https://cucumber.io/docs/gherkin/)

4. Create a `.js` file in `features\steps_definition` and write the test implementation with [cucumber functions](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md)

## TODO

- [ ] iOS Setup

