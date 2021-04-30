import React from 'react';
import { View, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import NavigationStep from './NavigationStep';
import TDepth from '../../data/TDepth';

const NavigationBar = (props) => {

     /* Some sort of onClick to switch between the pages */

    const switchPage = (name) =>
    {
        props.setCurrentStep(name)
    }


    const calculateStepT = () => {
        const STAGE_TO_ID = {"X": 1, "0": 2, "is": 3, "1": 4, "2": 5, "3": 6, "4": 7}
        // this is hard coded
        if (props.TStage.depth != null) {
            let TTitle = "T" + props.TStage.depth
            let TSubtitle = TDepth[STAGE_TO_ID[props.TStage.depth] - 1].short_hand
            if (props.TStage.ulceration != null) {
                if (props.TStage.ulceration === true) {
                    TTitle += "b"
                } else if (props.TStage.more_than_08mm && props.TStage.depth === "1") {
                    TTitle += "b"
                } else {
                    TTitle += "a"
                }
            }
            return { title: TTitle, subtitle: TSubtitle }
        } else {
            return { title: "T", subtitle: "TBD" }
        }

       
    }
     const calculateSLNB = ()  => {
        if (props.NStage.SLNB === "Not performed") {
            return "TBD"

        }

         if (props.NStage.SLNB === "Positive") {
            return "Positive"

        }

         if (props.NStage.SLNB === "Negative") {
            return "Negative"

        }

        return "TBD"
    }

    return (
        <View styles={styles.nav}>
            <View style={styles.row}>
                <NavigationStep
                title={calculateStepT().title}
                subtitle={calculateStepT().subtitle}
                onPress={() => switchPage("T")}
                />

                <NavigationStep
                title={"SLNB"}
                subtitle={calculateSLNB()}
                onPress={() => switchPage("SLNB")}
                />

                <NavigationStep
                title={"N"}
                subtitle={"TBD"}
                onPress={() => switchPage("N")}/>

                 <NavigationStep
                title={"M"}
                subtitle={"TBD"}
                onPress={() => switchPage("M")}/>


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