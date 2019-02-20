import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Button,
} from 'react-native';

const heroes = [
  { name: 'Tony Stark' },
  { name: 'Bruce Banner' },
  { name: 'Thor' },
  { name: 'Peter Parker' },
  { name: 'Black Widow' },
  { name: 'Captain America' },
  { name: 'Captain Marvel' },
]

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  state = {
    refreshing: false,
  }

  renderItem = (data) => {
    console.log('data', data)
    return (
      <TouchableHighlight onPress={() => { }}>
        <Text style={styles.listItem}>{data.item.name}</Text>
      </TouchableHighlight>
    )
  }

  handleRefresh = () => {
    this.setState({ refreshing: true })

    // seolah2 fetching
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 2000)
  }

  navigateToCounter = () => {
    this.props.navigation.navigate({ routeName: 'About' })
  }

  render() {
    console.log('render App')
    return (
      <View style={styles.container}>
        <Button
          title="Go to About"
          onPress={this.navigateToCounter}
        />
        <FlatList
          data={heroes}
          keyExtractor={(item) => item.name}
          renderItem={this.renderItem}

          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
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
  listItem: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'cyan',
    marginVertical: 20,
    fontSize: 20,
  }
});
