import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { CustomBtn } from '../components/customBtn';

//Tela de Dashboard 
export function Menu() {
  const navigation = useNavigation();

  function handleViabilidade() {
    navigation.navigate('Viabilidade')
  }

  function handleConsumo() {
    navigation.navigate('Consumo')
  }

  function handleRota() {
    navigation.navigate('Rota')
  }

  function handleGrid() {
    navigation.navigate('Grid')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewTitulo}>
        <Text style={styles.titulo}> ESCOLHA UMA OPÇÃO</Text>
      </View>

      <TouchableOpacity onPress={handleViabilidade}>
        <View style={styles.card}>
          <ImageBackground source={require('../assets/v5_7.png')} style={{ flex: 1, resizeMode: 'cover' }}>
            <Text style={styles.txtBtnHeader}>CALCULO VIABILIDADE</Text>
            <Text style={styles.txtBtnBody}>AQUI VOCÊ PODE CONFERIR SE
              COMPENSA ABASTECER
              COM ALCOOL OU GASOLINA</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleConsumo}>
        <View style={styles.card}>
          <ImageBackground source={require('../assets/v6_11.png')} style={{ flex: 1, resizeMode: 'cover' }}>
            <Text style={styles.txtBtnHeader}>CALCULO CONSUMO</Text>
            <Text style={styles.txtBtnBody}>VAI VIAJAR? FAÇA O PLANEJAMENTO DO
              COMBUSTIVEL NECESSARIO</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRota}>
        <View style={styles.card}>
          <ImageBackground source={require('../assets/v6_15.png')} style={{ flex: 1, resizeMode: 'cover' }}>
            <Text style={styles.txtBtnHeader}>TRAÇAR ROTA</Text>
            <Text style={styles.txtBtnBody}>PLANEJE A ROTA DE SUA VIAGEM</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  viewTitulo: {
    marginTop: 10
  },
  titulo: {
    marginTop: 10,
    textAlign: 'left',
    fontFamily: fonts.titulo,
    paddingLeft: 15
  },
  txtBtnHeader: {
    marginTop: 10,
    color: 'white',
    textAlign: 'left',
    fontFamily: fonts.titulo,
    paddingLeft: 10
  },
  txtBtnBody: {
    marginTop: 10,
    color: 'white',
    textAlign: 'left',
    fontFamily: fonts.normal,
    fontSize: 10,
    paddingLeft: 10
  },
  card: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 150,
    borderRadius: 8,
    overlayColor: 'rgba(255,255,255,0.8)',
  }
})