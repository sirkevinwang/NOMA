import React from 'react'
import { View, Text } from 'react-native'

const CaseFiveYearSurvivalRate = (props) => {
    return (
        <View>
            <Text>Est. 5-yr Survival: {props.survivalRate === null ? "TBD" : props.survivalRate }</Text>
        </View>
    )
}

export default CaseFiveYearSurvivalRate;