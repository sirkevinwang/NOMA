import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import OptionButton from '../components/Options/OptionButton';
import NodesOptionButton from '../components/Options/NodesOptionButton';
import SLNBOptionButton from '../components/Options/SLNBOptionButton';


import NData from '../data/NData';
import MSIData from '../data/MSIData';
import SLNBData from '../data/SLNB';

import ChoiceBlurb from '../components/Options/ChoiceBlurb';

const NPage = (props) => {
    const styles = StyleSheet.create({
        choicesContainer:{
            marginTop: 20,
            borderWidth: 0,
            width: Dimensions.get('window').width* 0.92,
            borderRadius: 10,
            marginBottom: 10,
            backgroundColor: 'white',
            
        },
        blurb:{
            padding: 16,
            
        },
        nodeOptionsContainer: {
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-evenly', 
            height: 100,
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            padding:10,
        }, 
        SLNBOptions:{
            marginTop: 10,
           
        }
        
 
    });

    const NDATA = NData;
    const MSIDATA = MSIData;
    const SLNBDATA = SLNBData;


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
    const computeClinicallyOccultIsActive = (NStage, optionStage) => {
        if (NStage.clinically_occult === null) {
            return false
        } else if (NStage.clinically_occult === optionStage) {
            return true
        } else {
            return false
        }
    }

    const computeSLNBIsActive = (NStage, optionStage) => {
        if (NStage.SLNB === null) {
            return false
        } else if (NStage.SLNB === optionStage) {
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

    const SLNBOptionClicked = (id) => {
        props.setNStage(
            {
                "SLNB": SLNBDATA[id].option_stage,
                "node_number":props.NStage.node_number,
                "clinically_occult": props.NStage.clinically_occult,
                "lab_confirmed": props.NStage.lab_confirmed,
                "MSI": props.NStage.MSI
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
    const clinicallyOccultOptions = NDATA.map((option) => 
        <NodesOptionButton 
            key={option.id} 
            primaryTitle={option.option_stage}
            isActive={computeClinicallyOccultIsActive(props.NStage, option.option_stage)}
            onClick={() => clinicallyOccultOptionClicked(option.id)}
        />
    );

    const SLNBOptions = SLNBDATA.map((option) =>
    <SLNBOptionButton 
        key={option.id} 
        primaryTitle={""}
        description={option.option_stage} 
        isActive={computeSLNBIsActive(props.NStage, option.option_stage)}
        onClick={() => SLNBOptionClicked(option.id)}
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
                            blurbHeader={'How many nodes were clinically\npalpable?'}
                            blurbDescription={'This helps us establish the clinical detectability'}
                            /> 
                    </View>
    
                    <View style={styles.nodeOptionsContainer}>
                         {nodeNumberOptions}
                     </View>
                </View>  


                <View style={styles.choicesContainer}>
                    <View style={styles.blurb}>
                        <ChoiceBlurb
                            blurbHeader={'Did you perform SLNB?'}
                            blurbDescription={'Staging might change based off the SLNB results. Please refer to the Info Center for more information.'}
                            />
                        <View style={styles.SLNBOptions}>
                            {SLNBOptions}
                        </View>
                        

                    </View>
                   
                </View>                
                <View style={styles.choicesContainer}>
                    <View style={styles.blurb}>
                        <ChoiceBlurb 
                            blurbHeader={'How many metastatic nodes were discovered?'}
                            blurbDescription={'This establishes the baseline for nodal spread.'}
                            /> 
                    </View>
                    <View style={styles.nodeOptionsContainer}>
                         {clinicallyOccultOptions}
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
