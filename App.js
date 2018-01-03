import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, AppRegistry, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      question: '読み込み中',
    }
    fetch('https://raw.githubusercontent.com/soyanakagawa/ReactNative_IceBreaker/master/public/json/question.json')
      .then((response) => response.json())
      .then((responseJson) => {
        const q_hash = responseJson.q
        this.setState ({
          questions: q_hash,
          question: q_hash[Math.floor(Math.random() * q_hash.length)]
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateText = () => {
    if (this.state.questions === null) {
      return
    }
    this.setState({
      question: newQuestion(this.state.questions)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>{this.state.question}</Text>
        </View>
        <View style={styles.button}>
          <Icon
            raised
            name='refresh'
            type='font-awesome'
            color='#78B9FF'
            onPress={() => this.updateText()}
          />
        </View>
      </View>
    );
  }
}

const newQuestion = (questions) => {
  return questions[Math.floor(Math.random() * questions.length)];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'powderblue', // for Debug
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 2,
    width: '90%',
    backgroundColor: '#fff',
    // backgroundColor: 'skyblue', // for Debug
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'steelblue', // for Debug
    alignItems: 'center',
    justifyContent: 'center',
  },
});