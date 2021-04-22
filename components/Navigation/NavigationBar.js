import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationStep from './NavigationStep';
const NavigationBar = () => {
    return (
        <View styles={styles.nav}>
            <View style={styles.row}>
                <NavigationStep/>
                <NavigationStep/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex'
    },
    row: {
        flexDirection: 'row'
    }
});

export default NavigationBar;