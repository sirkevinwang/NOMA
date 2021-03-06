import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import ChoiceBlurb from './ChoiceBlurb';

const OptionButton = (props) => {
    let styles = StyleSheet.create({
        bold: {
            fontWeight: '800',
            fontSize: 16,
            paddingRight: 20,
            paddingLeft: 10,
        },
        textWrapper: {
            flexWrap: 'wrap',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#000',
            borderWidth: 0,
            padding: 12,
            marginVertical: 8,
            backgroundColor: props.isActive ? '#6E6CF0' : '#fff',
            height: 60,
            justifyContent:'center',
            borderRadius: 10,
            flexShrink: 1
        },
        normalButtonWrapper: {
            width: Dimensions.get('window').width - 40,
        },
        abButtonWrapper: {
            width: (Dimensions.get('window').width - 45) / 2
        },
        activeTextColor: {
            color: '#fff',    
        },
        marginVertical:{
            borderWidth: 0.5,
            height: 60,
            borderColor:'#D9D9D9'
        },
        descriptionPadding:{
            paddingLeft: 26,
        },
        inActiveTextColor: {
            color:'gray'
        },
        description:{
  
        }
    });

    return (
        <View>
            <TouchableWithoutFeedback onPress={props.onClick}>
                <View style={props.isABButton != null ? [styles.textWrapper, styles.abButtonWrapper, props.style] : [styles.textWrapper, styles.normalButtonWrapper, props.style]}>
                    <Text style={props.isActive ? [styles.activeTextColor, styles.bold] : [styles.bold, styles.inActiveTextColor]}>{props.primaryTitle} </Text>
                    <View style={styles.marginVertical}></View>
                    <View style={styles.description}>
                        <Text style={props.isActive ? [styles.activeTextColor, styles.descriptionPadding] : [styles.normal, styles.descriptionPadding]}>{props.description}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}



export default OptionButton
