import React from 'react'
import { View, Text } from 'react-native'

const CaseTitle = (props) => {
    return (
        <View>
            <Text>{props.caseTitle}</Text>
        </View>
    )
}

export default CaseTitle;