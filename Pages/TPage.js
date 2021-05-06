import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import OptionButton from '../components/Options/OptionButton';
import TDepth from '../data/TDepth';

const TPage = (props) => {
    const styles = StyleSheet.create({
        container:{
            borderWidth: 2,
        }
    });
    const DATA = TDepth;


    const computeIsActive = (TStage, optionStage) => {
        
        if (TStage.depth === null) {
            return false
        } else if (TStage.depth === optionStage) {
            return true
        } else {
            return false
        }

    }

    const depthOptionClicked = (id) => {
        props.setTStage(
            {
                "depth": DATA[id - 1].option_stage,
                "ulceration": props.TStage.ulceration,
                "more_than_08mm": props.TStage.more_than_08mm
            }
        )
    }

    const options = DATA.map((option) =>
        <OptionButton 
            key={option.id} 
            primaryTitle={option.stage + option.option_stage}
            description={option.description} 
            isActive={computeIsActive(props.TStage, option.option_stage)}
            onClick={() => depthOptionClicked(option.id)}
            />
    );

    return (
        <View>
            {options}
        </View>
    )
}

export default TPage
