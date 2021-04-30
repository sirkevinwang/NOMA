import React from 'react'
import { View, Text } from 'react-native'

const InfoCenterActionItem = (props) => {
    const computeMEClasses = (cArr) => {
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
        <View>
            <Text>{props.title}</Text>
            {props.notes.map((note) =>
                <Text key="note">·{note}</Text>
            )}
            <Text>
            {computeMEClasses(props.classes)}
            </Text>
       </View>
    )
}

export default InfoCenterActionItem
