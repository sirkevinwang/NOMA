import React from 'react'
import { View, Text } from 'react-native'
import InfoCenterSection from './InfoCenterSection'

const InfoCenterContent = (props) => {
    const sections = props.sections
    const keys = Object.keys(props.sections)

    return (
        <View>
           {keys.map((k) => 
                <InfoCenterSection key={k} sectionHeader={k} sectionObject={sections[k]}></InfoCenterSection>
           )}
        </View>
    )
}

export default InfoCenterContent
