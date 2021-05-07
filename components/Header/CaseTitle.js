import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'


const CaseTitle = () => {

    //Uses a toggle to change the state from text input to header label
    const [caseName, setCaseName] = useState("");
    const [toggleHeader, setToggleHeader] = useState(false);

    return (
        <View style={styles.titleRow}>
            
            {toggleHeader? 
                <React.Fragment>
                    <Text style={styles.title}>{caseName}</Text> 
                    <TouchableOpacity onPress={() => setToggleHeader(!toggleHeader)}>
                         <Image source={require('../../assets/edit.png')} />
                    </TouchableOpacity>
                </React.Fragment>:
                                    
                
                <React.Fragment>
                    <TextInput
                         style={styles.textInput}
                         placeholder="Tap to enter anatomic location"
                         onChangeText={caseName => setCaseName(caseName)}
                         defaultValue={caseName}/>
                    
                    <TouchableOpacity onPress={() => setToggleHeader(!toggleHeader)}>
                         <Image source={require('../../assets/save.png')} />
                    </TouchableOpacity>
                </React.Fragment>
            }
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    titleRow: {
        flexDirection: 'row',
    },
    title: {
        fontWeight: "800",
        paddingRight: 5,
        fontSize: 20
    },
    textInput:{
        flex:1

    }
});


export default CaseTitle;