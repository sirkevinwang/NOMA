import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoCenterActionItem = (props) => {
    const computeNotes = () => {
        if (props.notes === undefined) {
            return (<></>)
        } else {

            return props.notes.map((note) =>
                <Text key={note + props.title}>{"∙ " + note}</Text>
            )
        }
    }
    const computeMEs = (cArr) => {
        if (props.classes === undefined) return <></>
        let str = ""
        if (cArr.length > 1) {
            for (let i = 0; i < cArr.length; i++) {
                if (i < cArr.length - 1) {
                    str = str + cArr[i] + "; "
                } else {
                    str += cArr[i]
                }
            }
        } else if (cArr.length === 1) {
            str = cArr[0]
        }
        return str
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {computeNotes()}
            <Text>
            {computeMEs(props.classes)}
            </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "transparent",
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
    },
    title: {
        fontWeight: "600"
    }
})

export default InfoCenterActionItem
