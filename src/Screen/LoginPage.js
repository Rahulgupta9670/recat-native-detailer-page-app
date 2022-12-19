import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.mainHeader}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/b7/8b/5d/b78b5da853c4fb7de5dd5c40d371219b.jpg',
        }}
        style={styles.backgroundImage}
        resizeMode={'stretch'}>
        <View style={styles.container}>
          <View style={styles.logo_div}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJekZUBC_TsmgiMm-mM6CCjBvrkzFJg-5nRQ&usqp=CAU',
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://png.icons8.com/message/ultraviolet/50/3498db',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              //   onChangeText={(email) => this.setState({email})}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              //   onChangeText={(password) => this.setState({password})}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            // onPress={() =>navigator. ('login')}
            onPress={() => navigation.navigate('Homescreen2')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            //  onPress={() => this.onClickListener('restore_password')}
          >
            <Text>Forgot your password?</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            // onPress={() => this.onClickListener('register')}
          >
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  mainHeader: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: '100%',
    backgroundImage:
      'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',

    //   height:"100%",
    // backgroundColor: '#009999',
    //     background: rgb(34,193,195);
    // background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);

    //   backgroundColor: "rgb(34,193,25)",
    //   background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  },
  logo_div: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 200,

    // backgroundColor:"red"
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 350,
    height: 55,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 350,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
