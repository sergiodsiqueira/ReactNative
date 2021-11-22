import React from 'react';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Rotas from './src/routes'

export default function App() {

  const [fontes] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontes)
    return (
      <AppLoading />
    )

  return (
    <Rotas />
  );
}