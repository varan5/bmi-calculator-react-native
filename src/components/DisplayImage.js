import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Input = ({ imageSource }) => {
    return (
        <View style={styles.containerStyle}>
          <Image source={{uri: 'imageSource'}} />
        </View>
    )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 30,
  },
 
})

export default Input