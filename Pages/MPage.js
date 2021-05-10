import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import OptionButton from '../components/Options/OptionButton';
import MDepth from '../data/MDepth';

const MPage = (props) => {
    const DATA = MDepth;

    const styles = StyleSheet.create({
        container:{

        }
         
    });


    const computeIsActive = (MStage, optionStage) => {
        if (MStage.mets === null) {
            return false
        } else if (MStage.mets === optionStage) {
            return true
        } else {
            return false
        }
    }

    const depthOptionClicked = (id) => {
        props.setMStage(
            {
                "mets": DATA[id - 1].option_stage,
                "mets_location": props.MStage.mets_location
            }
        )
    }

    const options = DATA.map((option) =>
        <OptionButton 
            key={option.id} 
            primaryTitle={option.stage + option.option_stage}
            description={option.description} 
            isActive={computeIsActive(props.MStage, option.option_stage)}
            onClick={() => depthOptionClicked(option.id)}
            />
    );

    return (
        <View style={styles.container}>
            {options}
        </View>
    )
}

export default MPage