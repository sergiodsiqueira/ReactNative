import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { CustomBtn } from '../components/customBtn';

export function Welcome() {
  const navigation = useNavigation();

  function handleMenu() {
    navigation.navigate('Menu')
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Image source={require('../assets/LOGOCARTOOLS.png')}
        style={styles.logotipo} />

      <Image source={require('../assets/v1_3.png')}
        style={styles.background} />

      <TouchableOpacity style={styles.botao} onPress={handleMenu}>
        <Text style={styles.botaotexto}>
          ENTRAR
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    //justifyContent: 'top',
  },
  logotipo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.07,
    resizeMode: 'contain',
    marginTop: 80
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
    marginTop: 40
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 140,
    height: 35,
    marginTop: 40
  },
  botaotexto: {
    color: 'white',
    fontSize: 11,
    fontFamily: fonts.normal,
  }
});