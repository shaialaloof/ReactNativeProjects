import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
// Import LoginForm file to initialise
import LoginForm from './components/LoginForm';

// App code with render function that gets called
// as soon as the appp launches.
// Renders header
class App extends Component {
  // Lifecycle method to retrieve email data before app initialisation
  componentWillMount() {
    // Connect to Google Firebase (copypasta from Firebase)
    firebase.initializeApp({
    apiKey: 'AIzaSyCZ9vVHYwE2JyKzSlsZALNSymtZgDh5Tdg',
    authDomain: 'authentication-cbd81.firebaseapp.com',
    databaseURL: 'https://authentication-cbd81.firebaseio.com',
    projectId: 'authentication-cbd81',
    storageBucket: 'authentication-cbd81.appspot.com',
    messagingSenderId: '705370153388'
  });
  }

  render() {
    return (
      // Login Header
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
