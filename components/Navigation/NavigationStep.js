import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const NavigationStep = (props) => {

    
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

const styles = StyleSheet.create({
    wrapper: {
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginRight: 10
    },
    stepTitle: {
        fontWeight: '700',
        fontSize: 13,
        textAlign: 'center'
    },
    stepSubtitle: {
        fontWeight: '400',
        fontSize: 9,
        color: "#8c8c8c",
        textAlign: 'center'
    }
});

export default NavigationStep