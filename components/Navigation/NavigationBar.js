import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationStep from './NavigationStep';
import TDepth from '../../data/TDepth';

const NavigationBar = (props) => {
    const calculateStepT = () => {
        const STAGE_TO_ID = {"X": 1, "0": 2, "is": 3, "1": 4, "2": 5, "3": 6, "4": 7}
        // this is hard coded
        if (props.TStage.depth != null) {
            let TTitle = "T" + props.TStage.depth
            let TSubtitle = TDepth[STAGE_TO_ID[props.TStage.depth] - 1].short_hand
            if (props.TStage.ulceration != null) {
                if (props.TStage.ulceration === true) {
                    TSubtitle += "b"
                }
            }

            return { title: TTitle, subtitle: TSubtitle }
        } else {
            return { title: "T", subtitle: "TBD" }
        }
    }
    return (
        <View styles={styles.nav}>
            <View style={styles.row}>
                <NavigationStep
                title={calculateStepT().title}
                subtitle={calculateStepT().subtitle}/>
                {/* <NavigationStep TStage={props.TStage}/> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex'
    },
    row: {
        flexDirection: 'row'
    }
});

export default NavigationBar;