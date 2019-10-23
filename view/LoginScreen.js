import React, { Component } from 'react';
import { Alert, View, StyleSheet, Text, Button, TextInput, TouchableHighlight } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        password: '',
        error: false
      }
      this.handleLogin = this.handleLogin.bind(this)
    }
  
    static navigationOptions = {
      title: 'LoginScreen',
      headerStyle: {
        backgroundColor: '#0fb9b1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    handleLogin() {
      // this.props.navigation.navigate('Home', { user: decode(this.state.name) });
      this.props.navigation.navigate('Home', { user: this.state.name });
    }
  
    render() {
      return (
        <View style={styles.main}>
          <Text style={styles.title}>Register/Log In</Text>
          <TextInput
            style={styles.itemInput}
            onChange={this.handleChange}
            placeholder="Username" />
          <TextInput
            style={styles.itemInput}
            onChange={this.handlePChange}
            placeholder="Password"
            secureTextEntry={true}/>
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleLogin} >
            <Text style={styles.title}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleRegister} >
            <Text style={styles.title}>Register</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
  
  //Todo: move to external file for use on all screens
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#2bcbba'
    },
    title: {
      fontSize: 25,
      textAlign: 'center'
    },
    list: {
      fontSize: 14
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginTop: 10,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: "#111",
      alignSelf: 'center'
    },
    button: {
      height: 40,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 8,
      marginBottom: 5,
      marginTop: 5,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });