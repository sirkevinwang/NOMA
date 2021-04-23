import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CaseTitle = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.caseName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "800"
    }
});


export default CaseTitle;