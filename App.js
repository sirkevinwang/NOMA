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

    const calculateStepT = () => {
      let TTitle = ""
      // this is hard coded
      if (T.depth != null) {
        TTitle = "T" + T.depth
        if (T.ulceration != null) {
          if (T.ulceration === true) {
            TTitle += "b"
          } else if (T.more_than_08mm && T.depth === "1") {
            TTitle += "b"
          } else {
            TTitle += "a"
          }
        }
      }
      return TTitle
    }
    const calculateStepN = () => {
      const MET_NODES_TO_ID = { "0": 0, "1": 1, "2": 2, "3": 3, "3+": 4 }
      let NTitle = ""

      //helps caclulcate what's to be updated for the node number question
      if (NStage.node_number != null) {
        NTitle = 'N' + NStage.node_number
      }

      const OCC_NODES_TO_TITLE = { "0": 'a', "1": 'a', "2": 'b', "3": 'b', "3+": 'c' }

      //helps caclulcate what's to be updated for the number of clinically occult question
      if (NStage.clinically_occult != null) {
        NTitle = NTitle + OCC_NODES_TO_TITLE[NStage.clinically_occult]
      }

      return NTitle
    }


    //Method to update the heading on the M Stage in the Stepper 
    const calculateStepM = () => {
      const STAGE_TO_ID = { "0": 1, "1a": 2, "1b": 3, "1c": 4, "1d": 5 }

      if (MStage.mets != null) {
        let MTitle = "M" + MStage.mets
        return MTitle
      }
      return ""

    }
    
    let stage = ""
    stage += calculateStepT()
    stage += calculateStepN()
    stage += calculateStepM()

    if (stage === "") {
      return "TBD"
    } else {
      return stage
    }
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
    paddingHorizontal: 18,
  }
});
