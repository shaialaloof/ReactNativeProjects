import React from 'react';
import { TextInput, View, Text } from 'react-native';

// Constant which receives props from LoginForm, handles
// user data
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  // Retrieve styles from styles object
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    // Label and text
    // Reusable component to replace TextInput, making
    // user handling process much easier.
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
      // Get rid of autocorrect for emails
        autoCorrect={false}
        // Receive placeholder prop from parent
        // for reusable components
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        // secureTextEntry is by default true,
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

// Styles object
// Text and TextInput are siblings
// Flex 1 and Flex 2 are there to
// allocate proportion to centering
// 2:1 ratio of space allocated
const styles= {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  // Applied to View tag, the container
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

// Immediately import and export
export { Input };
