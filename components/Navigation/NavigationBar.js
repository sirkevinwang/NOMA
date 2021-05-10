import React from 'react';
import { View, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import NavigationStep from './NavigationStep';
import TDepth from '../../data/TDepth';
import MDepth from '../../data/MDepth';
import NData from '../../data/NData';
import MPage from '../../Pages/MPage';

const NavigationBar = (props) => {

     /*onClick to switch between the pages */
    const switchPage = (name) =>
    {
        props.setCurrentStep(name)
    }

    //Method to update the heading on the N Stage in the Stepper 
    const calculateStepN = () => { 
        const MET_NODES_TO_ID = {"0": 0, "1": 1, "2": 2, "3": 3, "3+": 4}
        let NTitle = "N"
        let NSubtitle = ''
        
        //helps caclulcate what's to be updated for the node number question
        if (props.NStage.node_number != null){
            NTitle = 'N' + props.NStage.node_number
            NSubtitle = NData[MET_NODES_TO_ID[props.NStage.node_number]].short_hand
        }

        const OCC_NODES_TO_TITLE = {"0": 'a', "1": 'a', "2": 'b', "3": 'b', "3+": 'c'}

        //helps caclulcate what's to be updated for the number of clinically occult question
        if (props.NStage.clinically_occult != null){
            NTitle = NTitle + OCC_NODES_TO_TITLE[props.NStage.clinically_occult]
            NSubtitle = NSubtitle + ' | ' + props.NStage.clinically_occult + ' oc.'

        }
        else{
            NSubtitle = NSubtitle + ' | TBD'
        }

        return {title:NTitle, subtitle:NSubtitle}
    }


    //Method to update the heading on the M Stage in the Stepper 
    const calculateStepM = () => {
        const STAGE_TO_ID = {"0": 1, "1a": 2, "1b": 3, "1c": 4, "1d": 5}

        if (props.MStage.mets != null) {
            let MTitle = "M" + props.MStage.mets
            let MSubtitle = MDepth[STAGE_TO_ID[props.MStage.mets] - 1].short_hand
            return {title:MTitle, subtitle:MSubtitle}
        }
        return {title:'M', subtitle:'TBD'}

    }

    //Method to update the heading on the T Stage in the Stepper 
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

    //Method to update the heading on the SLNB Stage in the Stepper 
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
                title={calculateStepN().title}
                subtitle={calculateStepN().subtitle}
                onPress={() => switchPage('N')}/>

                 <NavigationStep
                 title={calculateStepM().title}
                subtitle={calculateStepM().subtitle}
                onPress={() => switchPage('M')}/>


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