import React from 'react'
import {View, StyleSheet} from 'react-native'

const Input = () => {
    return (
        <View style={styles.containerStyle}>
          <View style={styles.gapCreatorStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 50,
    marginTop: 20,
  },
  gapCreatorStyle: {
    height: 40,
  }

})

export default Input