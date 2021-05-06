import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, SafeAreaView} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import CaseHeader from './components/Header/CaseHeader';
import NavigationBar from './components/Navigation/NavigationBar';
import InfoCenter from './components/InfoCenter/InfoCenter';


import emptyCaseData from './cases/empty-case';
import TPage from './Pages/TPage';
import NPage from './Pages/NPage';
import MPage from './Pages/MPage';
import SLNBPage from './Pages/SLNBPage';


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
      "node_number": null,
      "clinically_occult": null,
      "lab_confirmed": null,
      "MSI": null
  })

  //M Stage 
  const [MStage, setMStage] = useState({
    "mets": null,
    "mets_location": null
  })

  const ref = useRef()

  //Rendering Page Function
  const renderPage = () => {
 
    switch(currentStep){
      case 'T':
        return (<TPage 
                    TStage = {TStage}
                   setTStage = {setTStage}
                />)
      case 'N':
        return (<NPage
                  NStage = {NStage}
                  setNStage= {setNStage}/>)
       case 'M':
        return (<MPage
                  MStage = {MStage}
                  setMStage= {setMStage}/>)
       case 'SLNB':
        return (<SLNBPage
                  NStage = {NStage}
                  setNStage= {setNStage}/>)
    }
}

  const InfoCenterWrapper = () => {
    return <InfoCenter stage={computeStage(TStage, NStage, MStage)} fiveYearSurvival={computeFiveYearSurvival()}></InfoCenter>
  }

  // Simply calcuate the stage from TNM options
  const computeStage = (T, N, M) => {
    let stage = "TBD"
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
          <StatusBar
            backgroundColor="blue"
            />
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "#EDEEFC" }}> 
        {/* this view is actually useless, just to add a new level of depth*/}
          <View style={styles.topBar}>
            <CaseHeader 
              caseName = {caseName}
              stage = {computeStage(TStage, NStage, MStage)}
              caseStagingStatus = {caseStagingStatus}
              fiveYearSurvival={computeFiveYearSurvival()}
              TStage={TStage}/>
            <NavigationBar 
              TStage={TStage}
              NStage={NStage}
              MStage={MStage}
              setCurrentStep={setCurrentStep}
            />
          </View>

        </View>
          <ScrollView style={styles.contentView}>
            {renderPage()}
          </ScrollView>
      </SafeAreaView>
      <BottomSheet
        ref={ref}
        snapPoints={['80%', '40%', '20%']}
        initialSnap={2}
        renderContent={InfoCenterWrapper}
        renderHeader={DrawerHeader}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  contentView: {
    backgroundColor: "#EDEEFC",
    paddingHorizontal: 18
  }
});
