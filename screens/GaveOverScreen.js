
import React, {useState, useRef, useEffect} from "react";
import { View, Text, Button, StyleSheet} from 'react-native'; 

const GaveOverScreen = props => {

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>The Game is Over!</Text>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Number of rounds:</Text>
                <Text style={styles.resultNumber}>{props.roundsNumber}</Text>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Number was:</Text>
                <Text style={styles.resultNumber}>{props.userNumber}</Text>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#444',
        textAlign: 'center',
    },
    resultContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        width: '80%',
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
    },
    resultNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#888',
    },
});

export default GaveOverScreen;

