import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/welcome'
import { Menu } from '../screens/menu';
import { Consumo } from '../screens/consumo';
import { Rota } from '../screens/rota';
import { Viabilidade } from '../screens/viabilidade';

const Stack = createNativeStackNavigator();

const AppRoutes = () => (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'black' } }}>

        <Stack.Screen name='Welcome' component={Welcome} options={{ headerTitle: 'HOME', headerShown: false }} />
        <Stack.Screen name='Menu' component={Menu} options={{ headerTitle: '', headerShown: false, headerTintColor: 'white' }} />

        <Stack.Screen name='Viabilidade' component={Viabilidade} options={{ headerTitle: '', headerShown: false }} />
        <Stack.Screen name='Consumo' component={Consumo} options={{ headerTitle: '', headerShown: false }} />
        <Stack.Screen name='Rota' component={Rota} options={{ headerTitle: '', headerShown: false }} />
    </Stack.Navigator>
)

export default AppRoutes;
