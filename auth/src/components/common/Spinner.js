import React from 'react';
// Built in thingamajig from react native library
import { View, ActivityIndicator } from 'react-native';

// Loading spinner to process request
// Helps let user know that their
// request is being handled.
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
