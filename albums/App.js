// Index.js - place code in here for IOS!!!

// Import a library to  help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
  <Text>Some text</Text>
);
// Render it to the device
AppRegistry.registerComponent('albums', () => App);

export default App;
