import React from 'react';
import { View, Text } from 'react-native';
import CaseTitle from './CaseTitle';
import CaseStage from './CaseStage';
import CaseFiveYearSurvivalRate from './CaseFiveYearSurvivalRate';

const CaseHeader = (props) => {
    return (
        <View>
            <CaseTitle caseTitle={props.caseTitle}/>
            <CaseStage stage={props.stage} clinicalStage={props.clinicalStage} caseStatus={props.caseStatus}/>
            <CaseFiveYearSurvivalRate survivalRate={props.survivalRate}/>
        </View>
    )
}

export default CaseHeader
