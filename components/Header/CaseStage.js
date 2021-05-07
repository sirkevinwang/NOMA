import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CaseStage = (props) => {

    function computeStageString(stageArr) {
        var stageStr = ""
        stageArr.map( (x) =>  {
                x === null ? stageStr += "?" : stageStr += x
            }
        )
        return stageStr;
    }
    return (
        <>
        <Text style={styles.stageText}>{props.stage}</Text>
        </>
    );
}
const styles = StyleSheet.create({

    stageText: {
        color: "#6E6CF0",
        fontWeight: "600",
        fontSize: 24
    }
});
export default CaseStage;