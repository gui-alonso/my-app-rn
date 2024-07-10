import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header  from './componentes/Header.js';
import Body  from './componentes/Body.js';

export default class App extends React.Component {
  render(){
    return(
      <View style={{marginTop:20}}>
        <Header></Header>
        <Body></Body>
      </View>
    )
  }
  
}


