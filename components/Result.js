import React from 'react'
import Pie from 'react-native-pie'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default function Result ({ correct, incorrect, questionCount, handleRestart, handleBack}) {
    const correctPercentage = (correct / questionCount) * 100
    const incorrectPercentage = (incorrect / questionCount) * 100

    return (
        <View>
            <Pie
                radius={100}
                series={[correctPercentage, incorrectPercentage]}
                colors={['lime', 'red']} 
            />
            <Text>
                A percentage of correct answers: %{correctPercentage.toFixed(2)}    
            </Text>
            <Text>
                A percentage of incorrect answers: %{incorrectPercentage.toFixed(2)}
            </Text>
            <TouchableOpacity
                onPress={handleRestart}
            >
                <Text>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleBack}
            >
                <Text>Back to Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  })