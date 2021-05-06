import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import OptionButton from '../components/Options/OptionButton';
import NodesOptionButton from '../components/Options/NodesOptionButton';

import NData from '../data/NData';
import MSIData from '../data/MSIData';
import ChoiceBlurb from '../components/Options/ChoiceBlurb';

const NPage = (props) => {
    const styles = StyleSheet.create({
        choicesContainer:{
            marginTop: 20,
            backgroundColor:'silver',
            borderWidth: 1,
            width: Dimensions.get('window').width* 0.92,
            borderRadius: 6,
            marginBottom: 10
        },
        blurb:{
            padding: 16
        },
        nodeOptionsContainer: {
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-evenly', 
            height: 100,
            borderTopColor: 'gray',
            borderTopWidth: 1,
            padding:10      
        },  
    });

    const NDATA = NData;
    const MSIDATA = MSIData;

    //Checking if # of nodes button is active 
    const computeNodeNumberIsActive = (NStage, optionStage) => {
        if (NStage.node_number === null) {
            return false
        } else if (NStage.node_number === optionStage) {
            return true
        } else {
            return false
        }
    }

    //Checking if # of clinically occult button is active 
    const computeClinacllyOccultIsActive = (NStage, optionStage) => {
        if (NStage.clinically_occult === null) {
            return false
        } else if (NStage.clinically_occult === optionStage) {
            return true
        } else {
            return false
        }
    }

    //Checking if # of clinically occult button is active 
    const computeMSIIsActive = (NStage, optionStage) => {
        if (NStage.MSI === null) {
            return false
        } else if (NStage.MSI === optionStage) {
            return true
        } else {
            return false
        }
    }

    //updating the number of nodes button state once clicked 
    const nodeNumberOptionClicked = (id) => {
        props.setNStage(
            {
                "node_number": NDATA[id - 1].option_stage,
                "clinically_occult": props.NStage.clinically_occult,
                "lab_confirmed": props.NStage.lab_confirmed,
                "MSI": props.NStage.MSI,
            }
        )
    }

    //updating the clincally occult button state once clicked 
    const clinicallyOccultOptionClicked = (id) => {
        props.setNStage(
            {
                "node_number": props.NStage.node_number,
                "clinically_occult": NDATA[id - 1].option_stage,
                "lab_confirmed": props.NStage.lab_confirmed,
                "MSI": props.NStage.MSI,
            }
        )
    }

    //updating the MSI button state once clicked 
    const MSIOptionClicked = (id) => {
        props.setNStage(
            {
                "node_number": props.NStage.node_number,
                "clinically_occult": props.NStage.clinically_occult,
                "lab_confirmed": props.NStage.lab_confirmed,
                "MSI": MSIDATA[id - 1].option_stage,
            }
        )
    }


    //creating the options for the number of nodes
    const nodeNumberOptions = NDATA.map((option) =>
       
            <NodesOptionButton 
                key={option.id} 
                primaryTitle={option.option_stage}
                isActive={computeNodeNumberIsActive(props.NStage, option.option_stage)}
                onClick={() => nodeNumberOptionClicked(option.id)}
            />  
 
    );

    //creating the options for the clincally occult options
    const clincallyOccultOptions = NDATA.map((option) => 
        <NodesOptionButton 
            key={option.id} 
            primaryTitle={option.option_stage}
            isActive={computeClinacllyOccultIsActive(props.NStage, option.option_stage)}
            onClick={() => clinicallyOccultOptionClicked(option.id)}
        />
    );

    const MSIOptions = MSIDATA.map((option) => 
        <NodesOptionButton 
            key={option.id} 
            primaryTitle={option.option_stage}
            isActive={computeMSIIsActive(props.NStage, option.option_stage)}
            onClick={() => MSIOptionClicked(option.id)}
        />
    );





    return (
        <React.Fragment>
                        
                <View style={styles.choicesContainer}>
                    <View style={styles.blurb}>
                        <ChoiceBlurb 
                            blurbHeader={'How many metastatic nodes were discovered?'}
                            blurbDescription={'This establishes the baseline for nodal spread.'}
                            /> 

                    </View>
                    <View style={styles.nodeOptionsContainer}>
                         {nodeNumberOptions}
                     </View>
                </View>


                <View style={styles.choicesContainer}>
                    <View style={styles.blurb}>
                        <ChoiceBlurb 
                            blurbHeader={'How many nodes were clinically\noccult?'}
                            blurbDescription={'This helps us establish the clinical detectability'}
                            /> 
                    </View>
                    
                    <View style={styles.nodeOptionsContainer}>
                         {clincallyOccultOptions}
                     </View>
                </View>
            

                <View style={styles.choicesContainer}>
                    <View style={styles.blurb}>
                        <ChoiceBlurb 
                            blurbHeader={'What is the MSI Status?'}
                            blurbDescription={'Lastly, MSI status helps us understand satellite, locally recurrent, or in transit lesions.'}
                            /> 
                    </View>
                    
                    <View style={styles.nodeOptionsContainer}>
                         {MSIOptions}
                     </View>
                </View>

    



        </React.Fragment>

        
    )
}

export default NPage
