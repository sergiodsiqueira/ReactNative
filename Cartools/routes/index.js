import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRouters from './stackRoutes'

const Routes = () =>(
    <NavigationContainer>
        <StackRouters />
    </NavigationContainer>
)

export default Routes;