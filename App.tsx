import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class App  extends React.Component{

 Header(){
  return(
    <Text>Olá!</Text>
  )
 } 

 Body = () =>{
  return(
    <Text>Conteúdo do meu app.</Text>
  )
 }

  render(){
    return(
      <View>
        <this.Header></this.Header>
        <this.Body></this.Body>
        <Botao></Botao>
      </View>
    )
  }

}

const Botao = () =>{
  return(
    <Button title='Clique aqui'></Button>
  )
}