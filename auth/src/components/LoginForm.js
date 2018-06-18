import React, { Component } from 'react';
// Don't forget to import firebase or it won't find it
import firebase from 'firebase';
// Importing reusable components from common folder
// Input is imported from Input.js, reusable component
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';


// class extending to the component database
// for the login form
class LoginForm extends Component {
  // Deal with user feedback using state
  state = { email: '', password: '', error: '', loading: false};

  // Callback function
  onButtonPress() {
    // Pass variables from state object
  const { email, password } = this.state;

 // Reset state to clear out error message.
 // Pass login as true to hide button and show
 // loading button
  this.setState({error: '', loading: true});

  // Catch method to handle errors
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
      });
  }

  // If login fails
  onLoginFail() {
    this.setState({error: 'Authentication Failed', loading: false})
  }

  // Clean out form once user has signed in
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

// Loading spinner  callback function
  renderButton() {
    // If it's loading:
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    // If not:
    return (
      // Callback function, bind the context to the function
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }


// Render the login form
  render() {
    return (

      <Card>
        <CardSection>
        // Retrieve user input with setState each time they type
        // pass undefined as secureTextEntry, which is false
          <Input
            label='Email'
            placeholder='mariah.bell@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        // Password field, same as email field
        // Hides text
        <CardSection>
          <Input
            // Pass secureTextEntry as true to hide text
            // Just listing the prop will by default show up as true
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        // Will display if authentication fails
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
        // Call render button function
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

// Error text styling
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
