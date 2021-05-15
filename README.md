# NOMA
![NOMA app cover image](docs/noma_cover.png)

## Welcome to NOMA
NOMA is a mobile app that helps dermatologists stage melanoma. The app guides practitioners through the melanoma staging process by organizing the process into three distinct steps: T (for depth), N (for nearby lymph nodes involved), and M (for distant metastasis). It automatically calculates the clinical and pathological stages as well as the 5-year survival rates based on the options selected at each of these three steps. 

With NOMA, we are reshaping how melanoma is staged by catering to practitioners with different levels of expertise. We are also helping them come up with the best treatment plans with features like the information center. We hope NOMA can pave the way for that day where there’s no melanoma that can’t be cured.

### Info Center
NOMA features the Info Center, an informational UI element that dynamically updates based on the context, offering practitioners the next steps as well as treatment options depending where they are in the staging process.

All the suggestions are from the latest NCCN guidelines.

### Privacy & HIPAA
NOMA is primarily intended to be deployed as a native mobile app that runs entirely on-device. Currently, the app stages melanoma cases using the databased stored on-device (which is shipped as a part of the app). While the app currently does not store case information, the information it collects has been engineered in such a way that cases are de-identified. The app will only be able to collect the stage, anatomic site, and the date of the case should the case storage feature be implemented.

## Setup
* Install with `yarn` or `npm install`
* Run `expo start` to try it out.

NOMA is built with Expo and React Native, meaning that it could be deployed to iOS, Android, and the Web. Depending on how you would like to run NOMA, you can run `yarn ios` to run NOMA on the iOS simulator, `yarn android` to run on the Android simulator, or `yarn web` to run NOMA in a web browser. You can also download the Expo app from any mobile App Store and scan the QR code in the Expo browser window to run NOMA on a physical device.

## Data
Medical guidelines are constantly changing, so NOMA has been designed with scalability in mind. The data powering NOMA are stored in the format of JSON and ship with the app when compiled. This eliminates the need for the app to request that melanoma guideline information from a remote location.

Specifically, there are three parts to database structure: the staging data, the action item groups, and the staging options. All of these have been stored under the `data` folder. 


### Action Groups
The action groups represent a sets of next steps or treatment possibilities in the Info Center. For example, T2aN1aM0 and T2bN1aM0 are action groups since they share the same set of associated recommended actions. These action groups are used in the staging data. The action groups are stored in the "ActionGroups.js" file.

### Staging Data
The staging data contains information about specific stages, as well as the associated 5-year survival rate, clinical and pathological stages, and action group number (which should be uniquely identified). Staging data is stored in "StagingData.js" file. 

### Option Data
The options data are stored in separated as files named "TDepth", "MSIData", "MData", "SLNB", "NData". They represent the possible outcomes under each of the "TNM" steps. For example, the "MData" file includes all the possible options for distant metastasis category, which includes "M0" and "M1a/b/c/d". These options, along with the stage calculation in App.js should be edited when there is a change to the guidelines.

## Adding Data
To help non-programmers edit the staging data, we have created two Excel templates that are found inside the `parser` folder. 

**‌ActionItems Data.xlsx**
The file contains ActionGroup data. Rather than writing the next step / treatment items across, you should do Each row represents a next step / treatment option item that belong to an action group. You should always start with action group 1. We have provided a data dictionary in the template file.

**‌StagingGroup Data.xlsx**
The file that contains the staging data. Each row is a possible stage (e.g. T1aN1aM0). Each row has a linked staging data group number, which you should enter based on what you have entered in ActionItems. You should also enter the survival rate and the clinical & pathological stages. Again, we have provided the data dictionary in the template file.

You can find the sample data populated in these Excel files.

After entering the staging & recommendation data into these Excel files, we have written two python parsers so that you won't have to manually write JSON. You should following these steps to import that data into the app:
1. Install the latest python
2. Run `pip install pandas` and `pip install xlrd` to install the required packages.
3. Navigate to the `parser` folder. Be to that the Excel files are under this folder and are NOT renamed.
4. Run `python actionItemParser.py` and then copy the JSON portion of the print out.
5. Paste the copied JSON into `ActionGroups.js` to replace the content after the equal sign. The `export default ActionGroups;` should not be changed.
6. Run `python stagingGroupsParser.py` and copy the JSON portion of the print out.
7. Paste the copied JSON into `StagingData.js` to replace the content after the equal sign. Again, the last line should not be modified.

You have successfully updated the staging & recommendation data. Run `yarn start` to see your data updated. 
 

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