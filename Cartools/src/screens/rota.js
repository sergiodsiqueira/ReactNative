import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput } from 'react-native';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { CustomBtn } from '../components/customBtn';
import { CustomBtnBack } from '../components/customBtnBack';

export function Rota() {
  const navigation = useNavigation();

  function handleMenu() {
    navigation.navigate('Menu')
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomBtnBack
        onPress={handleMenu}
      />

      <View style={styles.viewTitulo}>
        <Text style={styles.titulo}> TRAÇAR ROTA</Text>
      </View>
      <View style={styles.viewDescricao}>
        <Text style={styles.descricao}>PLANEJE A ROTA DE SUA VIAGEM,</Text>
        <Text style={styles.descricao}>COMO PONTO DE PARTIDA USAREMOS</Text>
        <Text style={styles.descricao}>SUA LOCALIZAÇÃO ATUAL</Text>
      </View>

      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 40 }}>
        <Text style={styles.label}>
          DESTINO
        </Text>

        <TextInput style={styles.edit}
          placeholder='DIGITE O DESTINO'
        />
      </View>

      <CustomBtn
        onPress={handleMenu}
        textStyle={{ color: 'white' }}
        textButton='ROTA'
      />

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
    marginLeft: '40%'
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
  },
  viewDescricao: {
    marginTop: 10,
    marginLeft: '40%'
  },
  descricao: {
    fontSize: 10,
    fontFamily: fonts.normal,
  },
});
