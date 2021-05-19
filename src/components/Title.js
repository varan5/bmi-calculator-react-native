import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Title = ({ title }) => {
    return (
        <View style={styles.containerStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize:40,
    fontWeight: 'bold',
    color: 'teal',
  },
  containerStyle: {
    marginLeft: 50,
    marginTop: 20,
  }

})

export default Title