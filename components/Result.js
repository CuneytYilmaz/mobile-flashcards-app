import React from 'react'
import Pie from 'react-native-pie'
import { lightRed, green, black, white } from '../utils/colors'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native'

export default function Result ({ correct, incorrect, questionCount, handleRestart, handleBack}) {
    const correctPercentage = (correct / questionCount) * 100
    const incorrectPercentage = (incorrect / questionCount) * 100

    return (
        <View style={styles.container}>
            <View style={styles.pieContainer}>
                <Pie
                    radius={100}
                    series={[correctPercentage, incorrectPercentage]}
                    colors={[green, lightRed]} 
                />
                <Text style={[styles.textPercentage, { marginTop: 30 }]}>
                    Correct answers percentage: 
                    <Text style={{ fontWeight: 'bold' }}>
                        %{correctPercentage.toFixed(2)} 
                    </Text>   
                </Text>
                <Text style={styles.textPercentage}>
                    Incorrect answers percentage:
                    <Text style={{ fontWeight: 'bold' }}>
                        %{incorrectPercentage.toFixed(2)}
                    </Text>
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={handleRestart}
                    style={ Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn }
                >
                    <Text style={styles.btnText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleBack}
                >
                    <Text style={styles.textButton}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    pieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : 30,
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPercentage: {
        fontSize: 18,
        marginBottom: 10,
    },
    iosBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 65,
        width: 300,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        justifyContent: 'center',
    },
    androidBtn: {
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 60,
        width: 300,
        borderRadius: 2,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        color: white,
        fontSize: 15,
    },
    textButton: {
        color: black,
        marginTop: 5,
        marginBottom: Platform.OS === 'ios' ? 80 : 60,
        fontSize: 20,
    },
})