import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import AutoStack from './AutoStack';
import { MyBottomTabNavigator } from './BottomNavigator';
import LoginPage from '../Screen/LoginPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// import OverDetails from '../Screen/OverDetails';
// import Product_3 from '../Screen/product_three';
// import Product_4 from '../Screen/product_four';
// import Product_three from '../Screen/product_three';
// import Product_four from '../Screen/product_four';
import DetailsPage from '../Screen/DetailsPage';

const Stack = createStackNavigator();

const AppStack = props => {
  const navigates = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Homescreen2"
      options={{ headerShown: false }}
      screenOptions={{
        headerStyle: {
         backgroundColor: '#3498db',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="LoginPage"
        component={LoginPage}
      /> */}

      <Stack.Screen
        {...props}
        name={'Homescreen2'}
        options={{ headerShown: false }}>
        {props => <AutoStack {...props} />}
      </Stack.Screen>
     
      {/* <Stack.Screen
        options={{
          headerLeft: () => null,
          // headerShown: false,
          headerTransparent: true,

          // headerBackVisible: false,

          headerTitle: props => (
            <TouchableOpacity onPress={() => navigates.navigate('Performics Detailer')}>
              <FontAwesome
                name="home"
                size={40}
                style={{
                  marginLeft: 0,
                 backgroundColor: '#3498db',

                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                color="#fff"
              />
            </TouchableOpacity>
          ),
        }}
        name="PrpoductDetails"
        component={PrpoductDetails}
      /> */}
      {/* <Stack.Screen
        options={{
          headerLeft: () => null,
          // headerShown: false,
          headerTransparent: true,
          // headerBackVisible: false,

          headerTitle: props => (
            <TouchableOpacity onPress={() => navigates.navigate('Performics Detailer')}>
              <FontAwesome
                name="home"
                size={40}
                style={{
                  marginLeft: 0,
                 backgroundColor: '#3498db',

                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
        name="OverDetails"
        component={OverDetails}
      /> */}
      {/* <Stack.Screen
        options={{
          headerLeft: () => null,
          // headerShown: false,
          headerTransparent: true,
          // headerBackVisible: false,

          headerTitle: props => (
            <TouchableOpacity onPress={() => navigates.navigate('Performics Detailer')}>
              <FontAwesome
                name="home"
                size={40}
                style={{
                  marginLeft: 0,
                 backgroundColor: '#3498db',

                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
        name="Product_three"
        component={Product_three}
      /> */}
      {/* <Stack.Screen
        options={{
          headerLeft: () => null,
          // headerShown: false,
          headerTransparent: true,
          // headerBackVisible: false,

          headerTitle: props => (
            <TouchableOpacity onPress={() => navigates.navigate('Performics Detailer')}>
              <FontAwesome
                name="home"
                size={40}
                style={{
                  marginLeft: 0,
                 backgroundColor: '#3498db',
                

                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
        name="Product_four"
        component={Product_four}
      /> */}
       <Stack.Screen
        options={{
          headerLeft: () => null,
          // headerShown: false,
          headerTransparent: true,
          // headerBackVisible: false,

          headerTitle: props => (
            <TouchableOpacity onPress={() => navigates.navigate('Performics Detailer')}>
              <FontAwesome
                name="home"
                size={40}
                style={{
                  marginLeft: 0,
                  //backgroundColor: '#3498db',
                  backgroundColor: '#3498db',

                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
        name="DetailsPage"
        component={DetailsPage}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
