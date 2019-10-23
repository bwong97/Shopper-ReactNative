import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class BarcodeScanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        user: undefined,
        hasCameraPermission: null
    }
  }

  static navigationOptions = {
    title: 'ScannerScreen',
    headerStyle: {
      backgroundColor: '#0fb9b1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    console.log('hi', this.state.user)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={StyleSheet.absoluteFill}
          />
        </View>
    );
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
  }
});