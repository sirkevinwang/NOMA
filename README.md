# NOMA
![NOMA app cover image](docs/noma_cover.png)

## Welcome to NOMA
NOMA is a mobile app that helps dermatologists stage melanoma. The app guides practitioners through the staging process by providing three distinct steps: T (for depth), N (for nearby lymph nodes involved), and M (for distant metastasis). It automatically calculates the clinical and pathological stages as well as the 5-year survival rates based on the options selected at each of these three steps. 

### Info Center
NOMA features the Info Center, an informational UI element that dynamically updates based on the context, offering practitioners the next steps as well as treatment options depending where they are in the staging process.

All the suggestions are from the latest NCCN guidelines.

### Privacy & HIPAA
NOMA is primarily intended to be deployed as a native mobile app that runs entirely on-device. Currently, the app stages melanoma cases using the databased stored on-device (which is shipped as a part of the app). While the app currently does not store case information, the information it collects has been engineered in such a way that cases are de-identified. The app will only be able to collect the stage, anatomic site, and the date of the case should the case storage feature be implemented.

## Setup
* Install with `yarn` or `npm install`
* Run `expo start` to try it out.

NOMA is built with Expo and React Native, meaning that it could be deployed to iOS, Android, and the Web. Depending on how you would like to run NOMA, you can run `yarn ios` to run NOMA on the iOS simulator, `yarn android` to run on the Android simulator, or `yarn web` to run NOMA in a web browser. You can also download the Expo app from any mobile App Store and scan the QR code in the Expo browser window to run NOMA on a physical device.

## Staging Data
Medical guidelines are constantly changing, so NOMA has been designed with scalability in mind. The data powering NOMA are stored in the format of JSON and ship with the app when compiled. This eliminates the need for the app to request that melanoma guideline information from a remote location.

Specifically, there are three parts to database structure: the staging data, the action item groups, and the staging options. All of these have been stored under the `data` folder. 


### Action Groups
The action groups represent a set of actions. 

### Staging Data
The staging data contains information about specific

### Option Data
The options data are stored in separated as files named "TDepth", "MSIData"


## Contributors

The original NOMA app is developed by the following team members as a part of their 2021 BHCI Capstone Project at Carnegie Mellon University:

* Matthew Fang ([@mattfang1999](https://github.com/Aliacf21))
* Alia Friedman ([@Aliacf21](https://github.com/Aliacf21)))
* Kevin Wang ([@sirkevinwang](https://github.com/sirkevinwang))
* Amanda Yang ([@AmandaYyy9](https://github.com/AmandaYyy9))
* Sabrina Zhai ([@sabrinazhai](https://github.com/sabrinazhai))

This project is also sponsored by our clients:

* Bryan Carroll, MD, PhD
* Amy Blake, MD, MA

We also want to thank CMU HCII's Prof. Vincent Aleven, the team's faculty mentor, for his guidance and support.