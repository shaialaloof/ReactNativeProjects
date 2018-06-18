import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
// Import LoginForm file to initialise
import LoginForm from './components/LoginForm';

// App code with render function that gets called
// as soon as the appp launches.
// Renders header
class App extends Component {
  // State object
  state = { loggedIn: null };

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

// Called when signed in or out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // Render if user has logged in or not
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style={styling.buttonStyle}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
            </Button>
            </View>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      // Login Header
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styling = {
  buttonStyle: {
    flexDirection: 'row'
  }
};

export default App;
