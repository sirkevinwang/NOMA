import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const ChoiceBlurb = (props) => {
    const styles = StyleSheet.create({
        blurbHeader:{
            fontWeight:'bold',
            fontSize: 18,
            color:'#414141'
        },
        blurbDescription:{
            fontSize: 11,
            paddingTop: 5,
            color:'#414141'
        }
        
    });

    return (
        <View >
            <Text style={styles.blurbHeader}>{props.blurbHeader}</Text>
            <Text style={styles.blurbDescription}>{props.blurbDescription}</Text>
        </View>
    )
}

export default ChoiceBlurb