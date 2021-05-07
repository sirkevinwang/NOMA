import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import InfoCenterActionItem from './InfoCenterActionItem'

const InfoCenterColoredSection = (props) => {
    const [accordionOpen, setAccordionOpen] = useState(true);

    const toggleCollapseState = () => setAccordionOpen(!accordionOpen)
    const computeColorCoding = (priority) => {
        if (priority === "Consideration") {
            return "#FBECC5"
        } else if (priority === "Suggestion") {
            return "#B4DEC5"
        } else {
            return "#FFD0D0"
        }
    }

    const styles = StyleSheet.create({
        container: {
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 8,
            marginBottom: 20,
            backgroundColor: computeColorCoding(props.priority),
        },
        colorCodeTitle: {
            fontWeight: '400',
            textTransform: "uppercase",
            textAlign: "center",
            padding: 4,
        }
    })

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleCollapseState}><Text style={styles.colorCodeTitle}>{props.priority}</Text></Pressable>
            <View style={{display: accordionOpen ? "block" : "none", backgroundColor: "white"}}>
                {props.colorSectionObject.map((actionItem) => 
                <InfoCenterActionItem 
                title={actionItem.title} 
                notes={actionItem.notes}
                classes={actionItem.classes}
                key={actionItem.title}
                />
                )}
            </View>
        </View>
    )

}


export default InfoCenterColoredSection
