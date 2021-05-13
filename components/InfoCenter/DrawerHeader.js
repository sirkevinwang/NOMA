import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import InfoCenterHeader from './InfoCenterHeader';
const DrawerHeader = (props) => (
    <View style={styles.header}>
        <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
            <View style={{ width: Dimensions.get('window').width - 32, paddingTop: 16}}>
                <InfoCenterHeader  survivalRate={props.fiveYearSurvival} stage={props.stage} />
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowColor: '#000000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
        
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
});

export default DrawerHeader;