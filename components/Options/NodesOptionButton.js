import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const NodesOptionButton = (props) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexGrow:1 ,
            padding: 5,
            
        },
        bold: {
            fontWeight: '800',
        },
        textWrapper: {
    
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#000',
            padding: 20,
            marginVertical: 9,
            backgroundColor: props.isActive ? '#000' : '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            
            
       
            
        },
        activeTextColor: {
            color: '#fff',
        }
    });

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={props.onClick}>
                <View style={styles.textWrapper}>
                    
                    <Text style={props.isActive ? [styles.activeTextColor, styles.bold] : [styles.bold]}>{props.primaryTitle} </Text>
                    <Text style={props.isActive ? [styles.activeTextColor] : []}>{props.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}



export default NodesOptionButton