import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CaseTitle from './CaseTitle';
import CaseStage from './CaseStage';
import TDepth from '../../data/TDepth';

// FIXME: this thing rerenders the time, shouldn't happen
const CaseHeader = (props) => {
    var dateFormat = require('dateformat');
    const [currentDateTime, setCurrentDateTime] = useState(null);
    const getDate = () => {
        if (currentDateTime === null) {
            setCurrentDateTime(Date())
        }
        return dateFormat(currentDateTime, "mmmm dS, yyyy h:MM TT")
    }
    return (
        <View>
            <CaseStage stage={props.stage} caseStatus={props.caseStagingStatus}/>
            <CaseTitle caseName={props.caseName}/>
            <Text style={styles.time}>{getDate()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    time: {
        fontWeight: "normal", 
        fontSize: 16,
        color: "#575757",
        paddingVertical: 2,
        fontWeight: "500"

    },
    contentView: {
        backgroundColor: "#EDEEFC",
        paddingHorizontal: 18,
        shadowColor: "rgba(0, 0, 0, 0.16)",
    }
});

export default CaseHeader
