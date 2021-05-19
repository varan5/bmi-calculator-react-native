import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Input = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={{
          uri: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/c387f1e20da1b75ea57cae47d919119c/a15cd2ba-f75d-4556-9b3c-313e3fe3df02_rw_1200.gif?h=6bb44abb4680c7d98af1d49a648dbbc4',
        }}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 30,
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginLeft: 50,
  },
});

export default Input;
