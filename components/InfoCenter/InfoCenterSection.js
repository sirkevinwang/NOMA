import React from 'react'
import { View, Text } from 'react-native'
import InfoCenterActionItem from './InfoCenterActionItem';
import InfoCenterColoredSection from './InfoCenterColoredSection';

const InfoCenterSection = (props) => {
    return (
        <View>
            {/* e.g. "Workup" */}
            <Text style={{ fontWeight: "600", color: "#414141", fontSize: 18, paddingVertical: 8}}>{props.sectionHeader}</Text>
            {Object.keys(props.sectionObject).map((k) => 
                props.sectionObject[k].length > 0 ? <InfoCenterColoredSection key={k + String(Math.floor(Math.random() * 10000))} priority={k} colorSectionObject={props.sectionObject[k]}></InfoCenterColoredSection> : <></>
            )}
        </View>
    )
}

export default InfoCenterSection
