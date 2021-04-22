import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const OptionButton = (props) => {
    const styles = StyleSheet.create({
        bold: {
            fontWeight: '800'
        },
        textWrapper: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            textAlign: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#000',
            padding: 12,
            marginVertical: 8,
            backgroundColor: props.isActive ? '#000' : '#fff'
        },
        activeTextColor: {
            color: '#fff'
        }
    });

    return (
        <View >
            <TouchableWithoutFeedback onPress={props.onClick}>
                <View style={styles.textWrapper}>
                    <Text style={props.isActive ? [styles.activeTextColor, styles.bold] : [styles.bold]}>{props.primaryTitle}: </Text>
                    <Text style={props.isActive ? [styles.activeTextColor] : []}>{props.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}



export default OptionButton
