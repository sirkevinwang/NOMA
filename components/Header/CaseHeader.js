import React from 'react';
import { View, Text } from 'react-native';
import CaseTitle from './CaseTitle';
import CaseStage from './CaseStage';
import CaseFiveYearSurvivalRate from './CaseFiveYearSurvivalRate';
import TDepth from '../../data/TDepth';

const CaseHeader = (props) => {

    const computeStage = () => {
        let stage = ""
        const STAGE_TO_ID = { "X": 1, "0": 2, "is": 3, "1": 4, "2": 5, "3": 6, "4": 7 }
        // this is hard coded
        if (props.TStage.depth != null) {
            stage = "T" + props.TStage.depth
            if (props.TStage.ulceration != null) {
                if (props.TStage.ulceration === true) {
                    stage += "b"
                } else if (props.TStage.more_than_08mm && props.TStage.depth === "1") {
                    stage += "b"
                } else {
                    stage += "a"
                }
            }
        } else {
            stage += "?"
        }

        return stage + " ? ?"
    }

    const computeClinicalStage = () => {

    }

    const computeStagingStatus = () => {

    }
    
    return (
        <View>
            <CaseTitle caseName={props.caseName}/>
            <CaseStage stage={computeStage()} caseStatus={props.caseStagingStatus}/>
            <CaseFiveYearSurvivalRate survivalRate={props.fiveYearSurvival}/>
        </View>
    )
}

export default CaseHeader
