import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StageHeader from './components/StageHeader';
import CaseTitleHeader from './components/CaseTitleHeader';


export default function App() {
  return (
    <View style={styles.container}>
      <CaseTitleHeader />
      <StageHeader />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
