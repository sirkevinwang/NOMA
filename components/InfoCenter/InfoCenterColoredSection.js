import React from 'react'
import { View, Text } from 'react-native'
import InfoCenterActionItem from './InfoCenterActionItem'

const InfoCenterColoredSection = (props) => {
    
    const computeColorCoding = (priority) => {
        if (priority === "Consideration") {
            return "#FBECC5"
        } else if (priority === "Suggestion") {
            return "#B4DEC5"
        }
    }

    return (
        <View>
            <Text style={{ fontWeight: '800', backgroundColor: computeColorCoding(props.priority)}}>{props.priority}</Text>
            {props.colorSectionObject.map((actionItem) => 
            <InfoCenterActionItem 
               title={actionItem.title} 
               notes={actionItem.notes}
               classes={actionItem.classes}
               key={actionItem.title}
            />
            )}
        </View>
    )
}

export default InfoCenterColoredSection
