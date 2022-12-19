import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homescreen from '../Screen/Homescreen';
// import Notification from '../Screen/Notification';
import CustomDrawer from '../comopent/CustomDrawer';
import LoginPage from '../Screen/LoginPage';
// import PrpoductDetails from '../Screen/PrpoductDetails';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';;


const Drawer = createDrawerNavigator();
const AutoStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Homescreen1"
      screenOptions={{
        
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        drawerActiveBackgroundColor: '#9AC4F8',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#333',
      }}
      // screenOptions={{
      //   headerShown: false
      // }}
      >
      <Drawer.Screen
        name="Performics Detailer"
        component={Homescreen}
          options={{ 
             // headerShown: false,
          headerTransparent: true,
             headerStyle: {
            // fontSize: wp('4.8%')
            // fontSize: 10
            backgroundColor:"#9AC4F8"
            // backgroundColor:"#191970"
         } }}

        // options={{
        //   drawerIcon: ({color}) => (
        //     // <Ionicons name="home-outline" size={22} color={color} />
        //     <Text>jjjj</Text>
        //     // <FontAwesome name="home"  size={30} color="#900"   />
        //   ),
        // }}
      />
      {/* <Drawer.Screen name="Notifications" component={Notification} /> */}
      {/*<Drawer.Screen
        options={{headerShown: false}}
        name="LoginPage"
        component={LoginPage}
        />*/}
    </Drawer.Navigator>
  );
};

export default AutoStack;

const styles = StyleSheet.create({});
// <Drawer.Screen
// options={{headerShown: false}}
// name="PrpoductDetails"
// component={PrpoductDetails}
// />
