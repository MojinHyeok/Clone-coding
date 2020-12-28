/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import react from 'react';
import 'react-native-gesture-handler';
import { StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      
    </NavigationContainer>
  );
};



export default App;
