import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Alert } from 'react-native';
import { TextInput, DataTable } from 'react-native-paper';

const App = () => {

  const [dados, setDados] = useState([]);
  const [lblBotao, setLblBotao] = useState('CONSULTAR')
  const [codEmpresa, setCodEmpresa] = useState('')
  const url = 'http://192.168.0.105:9000/empresas/' + codEmpresa.toString();

  const getDados = () => {
    if (codEmpresa == '') {
      Alert.alert('CÓDIGO INVÁLIDO', 'Por favor, verifique o código digitado.')
      return
    }

    axios.get(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        setDados([res.data]);
        setLblBotao('CONSULTAR NOVAMENTE');
        setCodEmpresa('');
      }).catch(err => { alert(err) })
  }

  const Item = ({ nmempresa, nmcidade, cduf }) => (
    <View style={{ flexDirection: 'row', width: '95%' }}>
      <View style={styles.item}>
        <Text style={styles.lblitem}>{nmempresa}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.lblitem}>{nmcidade}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.lblitem}>{cduf}</Text>
      </View>
    </View>
  );

  const RenderItem = ({ item }) => (
    <Item nmempresa={item.nmempresa} nmcidade={item.nmcidade} cduf={item.cduf} />
  )


  return (
    <SafeAreaView style={styles.container}>
      {/* TextInput de entrada do código para pesquisa */}
      <View style={styles.viewInput}>
        <TextInput style={styles.textInput}
          value={codEmpresa}
          onChangeText={setCodEmpresa}
          placeholder='DIGITE AQUI O CÓDIGO DA EMPRESA'
          keyboardType='number-pad'
          right={<TextInput.Icon name="magnify" onPress={getDados} />}
          mode='outlined'
          activeOutlineColor='black' />
      </View>

      <Item nmempresa='RAZÃO SOCIAL' nmcidade='CIDADE' cduf='UF' />
      <FlatList
        data={dados}
        numColumns={3}
        keyExtractor={item => item.cdempresa}
        renderItem={({ item }) => (<Item nmempresa={item.nmempresa} nmcidade={item.nmcidade} cduf={item.cduf} />)}
      />

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 1,
    padding: 5,
    width: 160,
  },
  lblitem: {
    fontSize: 12,
  },
  viewInput: {
    flexDirection: 'row',
    marginTop: '15%',
    width: '95%',
  },
  lblInput: {
    textAlign: 'left',
  },
  textInput: {
    flex: 1,
    width: '95%',
    paddingLeft: 5,
    height: 30,
    fontSize: 14,
  }
});

export default App;