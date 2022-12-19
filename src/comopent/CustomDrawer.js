import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={styles.menu}>
      <View style={styles.menu1}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={styles.footerHead}>
        <Text style={styles.footer}>Version 1.1</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  menu1: {
    height: '94%',
  },
  footerHead: {
    borderTopWidth: 0.6,
    borderColor: 'gray',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 8,
  },
});
