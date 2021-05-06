import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import ChoiceBlurb from './ChoiceBlurb';

const OptionButton = (props) => {
    let styles = StyleSheet.create({
        bold: {
            fontWeight: '800'
        },
        textWrapper: {
            flexDirection:'row',
            flexWrap: 'wrap',
            textAlign: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#000',
            padding: 12,
            marginVertical: 8,
            backgroundColor: props.isActive ? '#000' : '#fff',
            minWidth: 170, // note this property and the next one are temp fix for the width not equal for ulceration options
            flexGrow: 1
        },
        activeTextColor: {
            color: '#fff'
        }
    });

    return (
        <View>
            <TouchableWithoutFeedback onPress={props.onClick}>
                <View style={[styles.textWrapper, props.style]}>
                    <Text style={props.isActive ? [styles.activeTextColor, styles.bold] : [styles.bold]}>{props.primaryTitle}: </Text>
                    <Text style={props.isActive ? [styles.activeTextColor] : []}>{props.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}



export default OptionButton
