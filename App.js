import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor='#6AB7E2' barStyle='light-content' /> */}
      <Routes />
    </NavigationContainer>
  );
}

export default App