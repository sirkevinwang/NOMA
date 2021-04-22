import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CaseHeader from './components/Header/CaseHeader';
import NavigationBar from './components/Navigation/NavigationBar';

import emptyCaseData from './cases/empty-case';

export default function App() {


  const [currentStep, setCurrentStep]= useState(0);
  // TOOD: should load default data from here
  // header
  const [caseName, setCaseName] = useState("Untitled Case");
  const [stage, setStage] = useState([null, null, null]);
  const [caseStagingStatus, setCaseStagingStatus] = useState("Incomplete");
  const [fiveYearExpactancy, setFiveYearExpectancy] = useState(null);

  // T Stage
  const [TStage, setTStage] = useState({
    "depth": null,
    "ulceration": null,
    "more_than_0.8mm": null,
  });

  const [NStage, setNStage] = useState({
      "SLNB": null,
      "clinically_occult": null,
      "lab_confirmed": null,
      "MSI": null
  })
  const [MStage, setMStage] = useState({
    "mets": null,
    "mets_location": null
  })

  return (
    <View style={styles.container}>
      <CaseHeader />
      <NavigationBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
