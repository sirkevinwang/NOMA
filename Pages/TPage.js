import React from 'react';
import { View, Text } from 'react-native';

import OptionButton from '../components/Options/OptionButton';

const TPage = (props) => {
    const DATA = [
        {
            "id": 1,
            "stage": "T",
            "option_stage": "X",
            "description": "Primary tumor cannot be assessed",
        },
        {
            "id": 2,
            "stage": "T",
            "option_stage": "0",
            "description": "No evidence of primary tumor",
        },
        {
            "id": 3,
            "stage": "T",
            "option_stage": "is",
            "description": "Melanoma in situ",
        },
        {
            "id": 4,
            "stage": "T",
            "option_stage": "1",
            "description": "Thickness ≤ 1.0mm",
        },
        {
            "id": 5,
            "stage": "T",
            "option_stage": "2",
            "description": "Thickness 1.1 - 2.0mm",
        },
        {
            "id": 6,
            "stage": "T",
            "option_stage": "3",
            "description": "Thickness 2.0 - 4.0mm",
        },
        {
            "id": 7,
            "stage": "T",
            "option_stage": "4",
            "description": "Thickness > 4.0 mm",
        },
    ]


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
