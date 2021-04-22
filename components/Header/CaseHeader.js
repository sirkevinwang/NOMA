import React from 'react';
import { View, Text } from 'react-native';
import CaseTitle from './CaseTitle';
import CaseStage from './CaseStage';
import CaseFiveYearSurvivalRate from './CaseFiveYearSurvivalRate';

const CaseHeader = (props) => {
    return (
        <View>
            <CaseTitle caseName={props.caseName}/>
            <CaseStage stage={props.stage} caseStatus={props.caseStagingStatus}/>
            <CaseFiveYearSurvivalRate survivalRate={props.fiveYearSurvival}/>
        </View>
    )
}

export default CaseHeader
