import React, { Component } from 'react';
// Importing reusable components from common folder
// Input is imported from Input.js, reusable component
import { Button, Card, CardSection, Input } from './common';

// class extending to the component database
// for the login form
class LoginForm extends Component {
  // Deal with user feedback using state
  state = { email: '', password: ''};

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
            label='Passowrd'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
          </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
