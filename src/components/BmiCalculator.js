import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BmiCalculator = () => {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmiValue, setBmiValue] = useState(0)
  const [health, setHealth] = useState('Good Health')
  const [valuesNotSelected, setValuesNotSelected] = useState(false)
  const [displayHealthCard, setDisplayHealthCard] = useState(false)
  const [healthCardVisible, setHealthCardVisible] = useState(false)

  const handleButtonPress = () => {
    const bmiValue = Math.round((weight / (height * height)), 2)
    setBmiValue(bmiValue)
    console.log(bmiValue) 
    if (!height || !weight) {
      setValuesNotSelected(true)
    } else {
      setValuesNotSelected(false)
    }
 
    setHealthCardVisible(true)

  }


  const handleHealthCardButtonPress = () => {
    console.log('Health card will be shown')
    setDisplayHealthCard(true)



  }

    return (
        <View style={styles.containerStyle}>
          <TextInput 
            value={weight} 
            onChangeText={(value) => setWeight(value)} 
            style={styles.textInputStyle} 
            keyboardType="number-pad" 
            placeholder="Enter your weight (in Kgs)" />

          <TextInput 
            style={styles.textInputStyle} 
            onChangeText={(value) => setHeight(value)}
            keyboardType="number-pad" 
            placeholder="Enter your height (in meters)" />
          
          <Button 
            style={styles.buttonStyle} 
            onPress={handleButtonPress}
            color="teal" 
            title="Calculate BMI" />

          <Text>{valuesNotSelected ? `Please enter your values` : '' }</Text>
          <Text>{bmiValue ? `BMI Value: ${bmiValue}`: ''}</Text>
          <Text>
          { displayHealthCard ? 
               <Button 
               style={styles.buttonStyle} 
               onPress={handleHealthCardButtonPress}
               color="teal" 
               title="See Health Card" />
            : ''
        }
        </Text>
        
        <Text>
        {healthCardVisible ? 
        <Text style={styles.healthCardStyle}>
          Health Card{"\n\n"}
          BMI Value: {bmiValue}{"\n"}
          Health Staus: {health}
        </Text>

        : ''
      }
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 30,
  },
  textInputStyle: {
    fontSize: 20,
    padding: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 30,
    borderColor: 'grey',
    borderWidth: .2,
    borderRadius: 5,
  },
  buttonStyle: {

  },
  healthCardStyle: {
   marginLeft: 40, 
  }
})

export default BmiCalculator