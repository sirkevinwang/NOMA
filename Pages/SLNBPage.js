import React from 'react';
import { View, Text } from 'react-native';

import OptionButton from '../components/Options/OptionButton';
import SLNB from '../data/SLNB';

const SLNBPage = (props) => {
    const DATA = SLNB;

    const computeIsActive = (NStage, optionStage) => {
        if (NStage.SLNB === null) {
            return false
        } else if (NStage.SLNB === optionStage) {
            return true
        } else {
            return false
        }
    }

    /* update */
    const depthOptionClicked = (id) => {
        props.setNStage(
            {
                "SLNB": DATA[id].option_stage,
                "clinically_occult": props.NStage.clinically_occult,
                "lab_confirmed": props.NStage.lab_confirmed,
                "MSI": props.NStage.MSI
            }
        )
    }

    const options = DATA.map((option) =>
        <OptionButton 
            key={option.id} 
            primaryTitle={option.stage + option.option_stage}
            description={option.description} 
            isActive={computeIsActive(props.NStage, option.option_stage)}
            onClick={() => depthOptionClicked(option.id)}
            />
    );

    return (
        <View>
            {options}
        </View>
    )
}

export default SLNBPage