import React, { useRef }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCenterActionItem from './InfoCenterActionItem';
import StagingData from '../../data/StagingData';
import ActionGroups from '../../data/ActionGroups';
import InfoCenterContent from './InfoCenterContent';

const InfoCenter = (props) => {
    const STAGING_DATA = StagingData;
    const ACTION_GROUPS = ActionGroups;
    // first, let's look up the action group
    const actionsObject = () => {
        if (props.stage in STAGING_DATA) {
            // has the intermediate stage
            // then look up the action items
            const groupNumber = STAGING_DATA[props.stage].action_group;
            return ACTION_GROUPS[groupNumber]["actions"];
        } else {
            // doesn't have intermediate stage
            return null
        }
    }
    return (
        <View style={{
            backgroundColor: '#fff',
            padding: 16,
            height: 800
        }}>
            <InfoCenterContent sections={actionsObject()}></InfoCenterContent>
        </View>
    )
}

export default InfoCenter
