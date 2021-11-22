import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Dimensions } from 'react-native';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { CustomBtn } from '../components/customBtn';
import { CustomEdt } from '../components/customEdt';
import { CustomBtnBack } from '../components/customBtnBack';

export function Consumo() {
  const navigation = useNavigation();
  const [consumo, setConsumo] = useState(0);
  const [distancia, setDistancia] = useState(0);
  const [kmLitro, setKmLitro] = useState(0);

  function handleMenu() {
    navigation.navigate('Menu')
  }

  function Calcular() {
    if (distancia > 0 && kmLitro > 0) {
      setConsumo(distancia / kmLitro);
      setDistancia(0);
      setKmLitro(0);
      return
    } else {
      alert('Verifique os parâmetros distância e KM por Litro.')
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <CustomBtnBack
        onPress={handleMenu}
      />

      <View style={styles.viewTitulo}>
        <Text style={styles.titulo}> CALCULO DE CONSUMO</Text>
      </View>

      <View style={styles.viewDescricao}>
        <Text style={styles.descricao}>VAI VIAJAR? FAÇA O PLANEJAMENTO</Text>
        <Text style={styles.descricao}>DO NECESSÁRIO</Text>
      </View>

      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text style={styles.label}>
          Distância
        </Text>

        <TextInput style={styles.edit}
          placeholder='0'
          onChangeText={setDistancia}
          value={distancia}
        />
      </View>

      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 50 }}>
        <Text style={styles.label}>
          KM por Litro
        </Text>

        <TextInput style={styles.edit}
          placeholder='0'
          onChangeText={setKmLitro}
          value={kmLitro}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <CustomBtn
          onPress={Calcular}
          textStyle={{ color: 'white' }}
          textButton='CALCULAR'
        />
      </View>

      <View style={styles.viewPercent}>
        <Text style={styles.percent}> {consumo} </Text>
      </View>


    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  voltar: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.07,
    resizeMode: 'contain',
  },
  viewTitulo: {
    marginTop: 5,
  },
  titulo: {
    color: 'dimgray',
    marginTop: 10,
    fontFamily: fonts.titulo,
    marginLeft: '40%'
  },
  viewDescricao: {
    marginTop: 10,
  },
  descricao: {
    fontSize: 10,
    fontFamily: fonts.normal,
    marginLeft: '40%'
  },
  viewPercent: {
    marginTop: 10
  },
  percent: {
    color: 'silver',
    textAlign: 'center',
    fontSize: 70,
    fontFamily: fonts.normal,
    paddingLeft: 15
  },
  label: {
    fontFamily: fonts.normal,
    fontSize: 14,
    color: 'silver',
    textTransform: 'uppercase',
    padding: 1
  },
  edit: {
    placeholderTextColor: 'silver',
    fontFamily: fonts.normal,
    fontSize: 14,
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 8,
    height: 28,
    padding: 2
  }
});
