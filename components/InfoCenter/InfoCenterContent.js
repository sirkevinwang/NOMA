import React from 'react'
import { View, Text } from 'react-native'
import InfoCenterSection from './InfoCenterSection'

const InfoCenterContent = (props) => {

    const renderItems = () => {
        if (props.sections === null) {
            // then say no action items available
            return (
                <Text>No action item available.</Text>
            )
        } else {
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
    }

    return (
        <View>
            {renderItems()}
        </View>
    )
}

export default InfoCenterContent
