import * as React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Homescreen from '../Screen/Homescreen';
import About from '../Screen/About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AutoStack from './AutoStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export const MyBottomTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
      initialRouteName="HomeStack">
      <Tab.Screen
        {...props}
        name={'HomeStack'}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}>
        {props => <AutoStack {...props} />}
      </Tab.Screen>
      {/*  <Tab.Screen name="HomeStack" component={Homescreen} />*/}
      <Tab.Screen
        name="back"
        options={{
          tabBarLabel: 'Back',
          tabBarIcon: ({color}) => (
            <AntDesign name="back" color={color} size={26} />
          ),
        }}
        component={About}
      />
    </Tab.Navigator>
  );
};
