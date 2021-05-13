import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const InfoCenterHeader = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.valueContainer}>
                <Text style={styles.label}>Current Stage</Text>
                <Text style={styles.value}>{ props.stage }</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.label}>5-Year Survival Rate</Text>
                <Text style={styles.value}>{ props.survivalRate === null ? "TBD" : props.survivalRate }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom: 10
    },
    label: {
        color: "#414141",
        fontWeight: "600"
    },
    value: {
        color: "#6E6CF0",
        fontWeight: "600",
        fontSize: 24
    },
    valueContainer: {
        flexBasis: Dimensions.get('window').width / 2, 
        flexGrow: 0
    }
})
export default InfoCenterHeader;