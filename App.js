import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import CaseHeader from './components/Header/CaseHeader';
import NavigationBar from './components/Navigation/NavigationBar';


import emptyCaseData from './cases/empty-case';
import TPage from './Pages/TPage';

export default function App() {
  const [currentStep, setCurrentStep]= useState("T");
  const [toggleHeader, setToggleHeader] = useState(false);

  // TOOD: should load default data from here
  // header
  const [caseName, setCaseName] = useState("Untitled Case");
  const [stage, setStage] = useState([null, null, null]);
  const [caseStagingStatus, setCaseStagingStatus] = useState("Staging Incomplete");
  const [fiveYearSurvival, setFiveYearExpectancy] = useState(null);

  const [text, setText] = useState('');



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
  const [MStage, setMStage] = useState({
    "mets": null,
    "mets_location": null
  })

  const [randomInt, setRandomInt] = useState(0);

  return (
    <View style={styles.container}>
      {
        toggleHeader?
        <CaseHeader 
        
        caseName = {caseName}
        stage = {stage}
        caseStagingStatus = {caseStagingStatus}
        fiveYearSurvival = {fiveYearSurvival}
        TStage={TStage}/>: 
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setCaseName(text)}
        defaultValue={text}
      />
        

      }




        <TouchableOpacity onPress={() => setToggleHeader(!toggleHeader)}>
          <Image source={require('./assets/edit.png')} />


        </TouchableOpacity>
      
      <NavigationBar TStage={TStage}/>
      {/* Page */}
      <TPage 
        TStage = {TStage}
        setTStage = {setTStage} 
        randomInt={randomInt}
        setRandomInt={setRandomInt}/>
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
