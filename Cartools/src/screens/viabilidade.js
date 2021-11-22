import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions, ImageBackground, TextInput } from 'react-native';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { CustomBtn } from '../components/customBtn';
import { CustomBtnBack } from '../components/customBtnBack';

export function Viabilidade() {
  const navigation = useNavigation();

  const [vlrAlcool, setVlrAlcool] = useState(0);
  const [vlrGasolina, setVlrGasolina] = useState(0);
  const [percentual, setPercentual] = useState(0);
  const [botao, setBotao] = useState('CALCULAR');

  function handleMenu() {
    navigation.navigate('Menu')
  }

  function Calcular() {
    if (vlrAlcool != 0 && vlrGasolina != 0) {
      var vlrA = parseFloat(vlrAlcool.replace(',', '.'));
      var vlrG = parseFloat(vlrGasolina.replace(',', '.'));
    } else {
      alert('Verifique os valores.');
      return
    }

    if (vlrA > 0 && vlrG > 0) {
      setPercentual(parseInt(vlrA / vlrG * 100).toString() + '%');
      setBotao('CALCULAR NOVAMENTE');
      setVlrAlcool(0);
      setVlrGasolina(0);
      return;
    } else {
      alert('Verifique os valores.')
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <CustomBtnBack
        onPress={handleMenu}
      />


      <View style={styles.viewTitulo}>
        <Text style={styles.titulo}> CALCULO DE VIABILIDADE</Text>
      </View>

      <View style={styles.viewDescricao}>
        <Text style={styles.descricao}>AQUI VOCÊ PODE CONFERIR SE</Text>
        <Text style={styles.descricao}>COMPENSA ABASTECER</Text>
        <Text style={styles.descricao}>COM ÁLCOOL OU GASOLINA</Text>
      </View>

      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 40 }}>
        <Text style={styles.label}>
          PREÇO DO ÁLCOOL
        </Text>

        <TextInput style={styles.edit}
          placeholder='0'
          onChangeText={setVlrAlcool}
          value={vlrAlcool}
        />
      </View>

      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
        <Text style={styles.label}>
          PREÇO DA GASOLINA
        </Text>

        <TextInput style={styles.edit}
          placeholder='0'
          onChangeText={setVlrGasolina}
          value={vlrGasolina}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <CustomBtn
          onPress={Calcular}
          textStyle={{ color: 'white' }}
          textButton={botao}
        />
      </View>

      <View style={styles.viewPercent}>
        <Text style={styles.percent}> {percentual} </Text>
      </View>

      <View style={styles.viewRodape}>
        <Text style={styles.rodape}> Na média, uma relação de 73% ou menos do preço do
          etanol em relação ao preço da gasolina, favorece o uso
          do álcool. Se for 74% ou mais, use gasolina. </Text>
      </View>


    </SafeAreaView>
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
    marginRight: 15,
  },
  titulo: {
    color: 'dimgray',
    marginTop: 10,
    fontFamily: fonts.titulo,
    marginLeft: '40%'
  },
  viewDescricao: {
    marginTop: 10,
    marginLeft: '40%'
  },
  descricao: {
    fontSize: 10,
    fontFamily: fonts.normal,
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
  viewRodape: {
    marginTop: 10
  },
  rodape: {
    marginTop: 10,
    fontSize: 10,
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
    //placeholderTextColor: 'silver',
    fontFamily: fonts.normal,
    fontSize: 14,
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 8,
    height: 28,
    padding: 2
  }
});
