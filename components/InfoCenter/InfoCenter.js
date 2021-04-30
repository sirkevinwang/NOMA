import React, { useRef }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCenterActionItem from './InfoCenterActionItem';
import ActionGroups from '../../data/ActionGroups';
import InfoCenterContent from './InfoCenterContent';

const InfoCenter = () => {
    const DATA = ActionGroups;
    const sampleActionsObject = DATA[1]["actions"]; // HARD CODED
    return (
        <View style={{
            backgroundColor: '#fff',
            padding: 16,
            height: 800
        }}>
            <InfoCenterContent sections={sampleActionsObject}></InfoCenterContent>
        </View>
    )
}

export default InfoCenter
