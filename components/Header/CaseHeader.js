import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CaseTitle from './CaseTitle';
import CaseStage from './CaseStage';
import TDepth from '../../data/TDepth';

const CaseHeader = (props) => {
    return (
        <View>
            <CaseStage style={styles.caseStage} stage={props.stage} caseStatus={props.caseStagingStatus}/>
            <CaseTitle caseName={props.caseName}/>
            <Text>03/05/21 3:30PM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentView: {
        backgroundColor: "#EDEEFC",
        paddingHorizontal: 18
    }
});

export default CaseHeader
