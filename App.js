import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
    const [counter, setCounter] = useState(1)

    const incrementCount = () => {
        setCounter(counter + 1)
    };
    const decrementCount = () => {
        setCounter(counter - 1)
    };
  return (
      <View style={styles.container}>
          <Text>Count: {counter}</Text>
          <Text>Decrement Button</Text>
          <Button onPress={decrementCount} title="-" />
          <Text>Increment Button</Text>
          <Button onPress={incrementCount} title="+" />
      </View>
  );
};

/*class App extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0
    };
  }
  incrementCount () {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  decrementCount () {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  render () {
      return (
          <View style={styles.container}>
            <Text>Count: {this.state.counter}</Text>
            <Text>Decrement Button</Text>
            <Button onPress={this.decrementCount.bind(this)} title="-" />
            <Text>Increment Button</Text>
            <Button onPress={this.incrementCount.bind(this)} title="+" />
        </View>
    );
  }
}*/

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
