import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import ChoiceBlurb from './ChoiceBlurb';

const OptionButton = (props) => {
    const styles = StyleSheet.create({
        bold: {
            fontWeight: '800',
            fontSize: 16,
            paddingRight: 20
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
            width: Dimensions.get('window').width - 40,
            color: '#414141',
            height: 60,
            justifyContent:'center',
            borderRadius: 10,
        
        },
        activeTextColor: {
            color: '#fff',
            
        },
        marginVertical:{
            borderWidth: 0.5,
            height: 60,
            borderColor:'#D9D9D9'
        },
        normal:{
            paddingLeft: 26
        }


    });

    return (
        <View >
            
            <TouchableWithoutFeedback onPress={props.onClick}>
                <View style={styles.textWrapper}>
                    <Text style={props.isActive ? [styles.activeTextColor, styles.bold] : [styles.bold]}>{props.primaryTitle} </Text>
                    <View style={styles.marginVertical}></View>
                    <Text style={props.isActive ? [styles.activeTextColor, styles.normal] : [styles.normal]}>{props.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}



export default OptionButton
