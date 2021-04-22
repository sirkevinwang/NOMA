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
        <Text>{computeStageString(props.stage)} | {props.caseStatus}</Text>
        </>
    );
}

export default CaseStage;