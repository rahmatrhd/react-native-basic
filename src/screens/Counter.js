import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Counter extends Component {
  state = {
    value: 0,
    refreshing: false,
  }

  handleAdd = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  handleSubtract = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  handleChangeText = (text) => {
    this.setState({
      value: text
    })
  }

  render() {
    console.log('render App')
    return (
      <View style={styles.container}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate({ routeName: 'Home' })}
        />
        <Button title=" - " onPress={this.handleSubtract} />
        <TextInput
          value={`${this.state.value}`}
          onChangeText={this.handleChangeText}
          keyboardType="number-pad"
          style={styles.textInput}
        />
        <Button title=" + " onPress={this.handleAdd} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    marginVertical: 20,
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
});
