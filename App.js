/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Drawers from './Drawer';
import AppStack from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
    // <Drawers/>
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};
// const App = () => {
//   return (
//     <View></View>
//   );
// };
export default App;
