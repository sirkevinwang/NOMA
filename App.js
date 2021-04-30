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
<<<<<<< HEAD
import NPage from './Pages/NPage';
=======
import MPage from './Pages/MPage';
import DrawerHeader from './components/InfoCenter/DrawerHeader';

>>>>>>> b701a08a8bc418a9433c27c7409744c287a18332


export default function App() {
  const [currentStep, setCurrentStep]= useState("T");
  // TOOD: should load default data from here
  // header
  const [caseName, setCaseName] = useState("Untitled Case");
  const [stage, setStage] = useState([null, null, null]);
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

  const [randomInt, setRandomInt] = useState(0);
  const ref = useRef()

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <CaseHeader 
        caseName = {caseName}
        stage = {stage}
        caseStagingStatus = {caseStagingStatus}
        fiveYearSurvival = {fiveYearSurvival}
        TStage={TStage}/>
      <NavigationBar TStage={TStage}/>
      {/* Page */}
      <TPage 
        TStage = {TStage}
        setTStage = {setTStage} 
        randomInt={randomInt}
        setRandomInt={setRandomInt}/>
        <NPage
        NStage = {NStage}
        setNStage = {setNStage}
        randomInt={randomInt}
        setRandomInt={setRandomInt}
        />
      <StatusBar style="auto" />
    </View>
=======
    <>
      <View style={styles.container}>
        <CaseHeader 
          caseName = {caseName}
          stage = {stage}
          caseStagingStatus = {caseStagingStatus}
          fiveYearSurvival = {fiveYearSurvival}
          TStage={TStage}/>
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
>>>>>>> b701a08a8bc418a9433c27c7409744c287a18332
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
    // alignItems: 'flex-start',
=======
    backgroundColor: '#e8e8e8',
    alignItems: 'flex-start',
>>>>>>> b701a08a8bc418a9433c27c7409744c287a18332
    justifyContent: 'center',
  },
});
