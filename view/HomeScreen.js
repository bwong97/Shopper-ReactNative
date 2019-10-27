import React, { Component } from 'react';
import { Alert, View, StyleSheet, Text, Button, TextInput, TouchableHighlight, FlatList} from 'react-native';
import axios from 'axios';

export default class HomeScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
          
      }
      this.handleLogin = this.handleLogin.bind(this)
    }
  
    static navigationOptions = {
      title: 'HomeScreen',
      headerStyle: {
        backgroundColor: '#0fb9b1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    componentDidMount() {
      // ip address will be changed to a url when hosted
      axios.get(`http://192.168.200.184:3000/products`)
        .then(res => {
          const products = res.data;
          console.log( { products } );
          this.setState({ products: res.data });
        })
    }

    // replace with real function to do proper things
    handleLogin() {
      // this.props.navigation.navigate('Home', { user: decode(this.state.name) });
      this.props.navigation.navigate('Scanner', { user: this.state.name });
    }
  
    render() {
      return (
        <View>
          <Text>Home Screen</Text>
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleLogin} >
            <Text style={styles.title}>Scan Product</Text>
          </TouchableHighlight>
          <FlatList
            data={this.state.products}
            renderItem={({item}) => <Text style={styles.item}>{item.productName}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
    }
  }

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
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  