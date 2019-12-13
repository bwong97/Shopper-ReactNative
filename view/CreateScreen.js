import React, { Component } from 'react';
import { Alert, View, StyleSheet, Text, Button, TextInput, TouchableHighlight, FlatList} from 'react-native';
import axios from 'axios';

export default class CreateScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
          
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      // this.handleChange = this.handleChange.bind(this)
    }
  
    static navigationOptions = {
      title: 'CreateScreen',
      headerStyle: {
        backgroundColor: '#0fb9b1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    // replace with real function to do proper things
    async handleSubmit() {
      console.log(this.state);
      let payload = this.state;
      // ip address will be changed to a url when hosted
      await axios.post(`http://192.168.200.184:3000/products`, 
      {
        productName: this.state.productName,
        productPLU: this.state.productPLU,
        productDept: this.state.productDept
      }).then(res => {
          const products = res.data;
          console.log( { products } );
      })
    }

    handleChange(val, id) {
      this.setState({
        [id]: val
      });
      console.log(this.state[id]);
    }
  
    // set textinput ID as a prop or state or something
    // update state of that item using the prop thingy
    // for some reason, im having difficulty getting it to a nice dynamic or variable changing input

    render() {
      let text = 'productName'
      return (
        <View>
          <Text>Home Screen</Text>
          <TextInput
            style={styles.itemInput}
            onChangeText={(e) => this.handleChange(e, "productName")}
            placeholder="Product Name" />
          <TextInput
            style={styles.itemInput}
            onChangeText={(e) => this.handleChange(e, "productPLU")}
            placeholder="Product PLU" />
          <TextInput
            style={styles.itemInput}
            onChangeText={(e) => this.handleChange(e, "productPrice")}
            placeholder="Product Price" />
          <TextInput
            style={styles.itemInput}
            onChangeText={(e) => this.handleChange(e, "productDept")}
            placeholder="Product Dept" />
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit} >
            <Text style={styles.title}>Add Product</Text>
          </TouchableHighlight>
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
      color: 'black'
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
  