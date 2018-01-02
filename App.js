import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, AppRegistry, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';


const q_hash = [
  "家族で一番中が良いのは誰ですか？？",
  "最近、いちばん買ってよかったものは？",
  "今の仕事をやっててよかった！と思う瞬間は？",
  "最近撮った一番いい写真を見せてください",
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{question}</Text>
        <Icon
          raised
          name='refresh'
          type='font-awesome'
          color='#78B9FF'
          onPress={() => Alert.alert('本当はReloadしたい')} //TODO: 本当にReloadする
        />
      </View>
    );
  }
}

function onPressReloadQuestion() {
  let question = q_hash[Math.floor(Math.random() * q_hash.length)]
  const text = document.getElementsByName(Text)
  window.addEventListener('click', function() {
    text.innerHTML = question;
  });
}

let question = q_hash[Math.floor(Math.random() * q_hash.length)]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});