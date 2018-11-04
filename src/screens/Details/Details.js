import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export class Details extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    console.log(this.props)
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <Text>Details Screen</Text>
          <Button title='backHome' onPress={() => this.props.navigation.goBack()}>Back Home</Button>
      </SafeAreaView>
    );
  }
}
