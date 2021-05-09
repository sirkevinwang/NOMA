import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import ChoiceBlurb from './ChoiceBlurb';

const SLNBOptionButton = (props) => {
    let styles = StyleSheet.create({
        bold: {
            fontWeight: '800',
            fontSize: 16,
            paddingRight: 20,
            paddingLeft: 10,
        },
        textWrapper: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#000',
            borderWidth: 1,
            borderColor: '#F0F0F0',
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 8,
            backgroundColor: props.isActive ? '#6E6CF0' : '#fff',
            width: Dimensions.get('window').width - 60,
            height: 60,
            borderRadius: 10,
            color:'#414141',
            
        },
        activeTextColor: {
            color: '#fff',    
        },
   
        inActiveTextColor: {
            color:'gray'
        },

    });

    return (
        <View>
            <TouchableWithoutFeedback onPress={props.onClick}>
                <View style={[styles.textWrapper]}>
                    <Text style={props.isActive ? [styles.activeTextColor, styles.centeredText] : [styles.centeredText]}>{props.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}



export default SLNBOptionButton
