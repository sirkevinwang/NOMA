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

    const isActive = (name) => {
        if (props.currentStep === name){
            return true
        }
        return false
    }

    //TButton is "T"
    

    //Method to update the heading on the N Stage in the Stepper 
    const calculateStepN = () => { 
        let NTitle = "N"
        let NSubtitle = ''
        
        let macro_nodes = 0
        let micro_nodes = 0
        let plus = ''
        let isMSI = "No MSI"
        //palpable nodes = node_number
        //helps caclulcate what's to be updated for the number of clinically occult question
        if (props.NStage.node_number != null){
            if ( props.NStage.node_number === '4+'){
                macro_nodes = 4
            } else{
                macro_nodes = Number(props.NStage.node_number)

            }
        }


        if (props.NStage.clinically_occult != null){
            if ( props.NStage.clinically_occult === '4+'){
                micro_nodes = 4
            } else{
                micro_nodes = Number(props.NStage.clinically_occult)

            }
        }

        if (props.NStage.MSI != null){
            isMSI = props.NStage.MSI
        }

        let number = 0
        let letter = ''
        let total_nodes = macro_nodes + micro_nodes
    
    
     
        if (isMSI === "MSI Present"){
            letter = 'c'
            if (total_nodes === 0){
                number = 1
            } else if (total_nodes === 1){
                number = 2
            } else {
                number = 3
            }
        } else{
            if (total_nodes === 1){
                number = 1
                if (micro_nodes ===1){
                    letter = 'a'
                } else {
                    letter = 'b'
                }
            } else if (total_nodes === 2 || total_nodes === 3){
                number = 2
                if (macro_nodes >= 1) {
                    letter = 'b'
                } else {
                    letter = 'a'
                }
            } else if (total_nodes >= 4) {
                number = 3
                if (macro_nodes >= 1){
                    letter = 'b'
                } else {
                    letter = 'a'
                }
            }
        }

        NTitle = NTitle + number + letter
        if (macro_nodes === 4 || micro_nodes === 4){
            plus = "+"
        }

        NSubtitle = total_nodes + plus + " nodes" 
        return {title: NTitle, subtitle: NSubtitle}
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
                currentStep={props.currentStep}
                isActive={isActive('T')}
                />

                <NavigationStep
                title={calculateStepN().title}
                subtitle={calculateStepN().subtitle}
                onPress={() => switchPage('N')}
                currentStep={props.currentStep}
                isActive={isActive('N')}

                />

                 <NavigationStep
                 title={calculateStepM().title}
                subtitle={calculateStepM().subtitle}
                onPress={() => switchPage('M')}
                currentStep={props.currentStep}
                isActive={isActive('M')}
                
                />


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
    },
    row: {
        flexDirection: 'row',
    }
});

export default NavigationBar;