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
            minWidth: 170, // FIXME: note this property and the next one are temp fix for the width not equal for ulceration options
            backgroundColor: props.isActive ? '#6E6CF0' : '#fff',
            width: Dimensions.get('window').width - 40,
            height: 60,
            justifyContent:'center',
            borderRadius: 10,
            flexShrink: 1
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
                <View style={[styles.textWrapper, props.style]}>
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
