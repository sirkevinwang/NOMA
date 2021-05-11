import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

const NavigationStep = (props) => {

    const styles = StyleSheet.create({
        wrapper: {
            marginTop: 10,
            borderColor: '#000',
            borderWidth: 0,
            borderStyle: 'solid',
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 8,
            marginRight: 10,
            backgroundColor: props.isActive? "#6E6CF0" : "#EDEEFC",
            width: Dimensions.get('window').width / 3.5 

        },
        stepTitle: {
            fontWeight: '700',
            fontSize: 13,
            textAlign: 'center',
            color: props.isActive? 'white' : 'gray'
        },
        stepSubtitle: {
            fontWeight: '400',
            fontSize: 9,
            color: "#8c8c8c",
            textAlign: 'center',
            color: props.isActive? 'white' : 'gray'
        }
    });

   

    return (
        <TouchableOpacity
            onPress={props.onPress}
           >
            <View style={styles.wrapper}>
                <Text style={styles.stepTitle}>{props.title}</Text>
                <Text style={styles.stepSubtitle}>{props.subtitle}</Text>
             </View>
        </TouchableOpacity>
  
    )
}



export default NavigationStep
