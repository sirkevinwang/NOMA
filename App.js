import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import CaseHeader from './components/Header/CaseHeader';
import NavigationBar from './components/Navigation/NavigationBar';
import InfoCenter from './components/InfoCenter/InfoCenter';

import emptyCaseData from './cases/empty-case';
import TPage from './Pages/TPage';
import MPage from './Pages/MPage';
import DrawerHeader from './components/InfoCenter/DrawerHeader';

import StagingData from './data/StagingData';

export default function App() {
  const [currentStep, setCurrentStep]= useState("T");
  // TOOD: should load default data from here
  // header
  const [caseName, setCaseName] = useState("Untitled Case");
  const [caseStagingStatus, setCaseStagingStatus] = useState("Staging Incomplete");
  const [fiveYearSurvival, setFiveYearExpectancy] = useState(null);

  // T Stage
  const [TStage, setTStage] = useState({
    "depth": null,
    "ulceration": null,
    "more_than_08mm": null,
  });

  const [NStage, setNStage] = useState({
      "SLNB": null,
      "clinically_occult": null,
      "lab_confirmed": null,
      "MSI": null
  })

  //M Stage 
  const [MStage, setMStage] = useState({
    "mets": null,
    "mets_location": null
  })

  const [randomInt, setRandomInt] = useState(0);
  const ref = useRef()



  // Simply calcuate the stage from TNM options
  const computeStage = (T, N, M) => {
    let stage = ""
    // this is hard coded
    if (T.depth != null) {
      stage = "T" + T.depth
      if (T.ulceration != null) {
        if (T.ulceration === true) {
          stage += "b"
        } else if (T.more_than_08mm && T.depth === "1") {
          stage += "b"
        } else {
          stage += "a"
        }
      }
    } else {
      stage += ""
    }

    return stage + ""
  }

  const computeFiveYearSurvival = () => {
    let STAGING_DATA = StagingData;
    let stage = computeStage(TStage, NStage, MStage);
    if (stage in STAGING_DATA) {
      if ("survival_rate" in STAGING_DATA[stage]) {
        return STAGING_DATA[stage].survival_rate
      }
    } else {
      return "TBD"
    }
  }

  return (
    <>
      <View style={styles.container}>
        <CaseHeader 
          caseName = {caseName}
          stage = {computeStage(TStage, NStage, MStage)}
          caseStagingStatus = {caseStagingStatus}
          fiveYearSurvival={computeFiveYearSurvival()}
        />
        <NavigationBar TStage={TStage}/>
        {/* Page */}
        <TPage 
          TStage = {TStage}
          setTStage = {setTStage} />
        <MPage
          MStage = {MStage}
          setMStage = {setMStage}
        />
        <StatusBar style="auto" />
      </View>
      <BottomSheet
        ref={ref}
        snapPoints={['80%', '40%', '20%']}
        renderContent={InfoCenter}
        renderHeader={DrawerHeader}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
