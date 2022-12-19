import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import alldata from '../asstest/images/alldata.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
// import OverDetails from './OverDetails';

const DetailsPage = props => {
  const [desc, srtDesc] = useState([]);
  const [next, setNext] = useState([]);

  const navigate = useNavigation();
  useEffect(() => {
    let Image = props.route.params.data || [];
    srtDesc(Image);
    setNext(1);
  }, []);

  useEffect(() => {
    // console.log("imagessssssssssssss next", next)
  }, [next]);

  return (
    <ImageBackground resizeMode="stretch" style={styles.backgroundImage}>
      <View style={styles.Decription}>
        <Image
          style={styles.headerItemImage}
          source={desc[next]}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => (next < 2 ? navigate.goBack() : setNext(next - 1))}
          style={styles.buttonsBack}>
          <Ionicons name="ios-arrow-undo-sharp" size={30} color="white" />
        </TouchableOpacity>
        {next < desc.length - 1 ? (
          <TouchableOpacity
            onPress={
              () => (next < desc.length - 1 ? setNext(next + 1) : null)
              // navigate.navigate('PrpoductDetails', {Image: desc})
            }
            style={styles.buttonsBack}>
            <Ionicons name="ios-arrow-redo-sharp" size={30} color="white" />
          </TouchableOpacity>
        ) : null}
      </View>
    </ImageBackground>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 85,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: '#0000',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
  },

  Decription: {
    width: '100%',
    flex: 1,
    height: '100%',
  },

  buttons: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: -80,
    // backgroundColor:"#fff"
  },

  buttonsBack: {
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    borderRadius: 10,
    padding: 7,
  },
  headerItemImage: {
    width: '100%',
    height: '100%',
  },
  // buttonsBack: {
  //     backgroundColor: 'transparent',
  //     color:"#3498db",
  //     paddingHorizontal: 30,
  //     borderRadius: 10,
  //     padding: 7,
  //     shadowColor:" 0 6px 6px rgba(0, 0, 0, 0.6);"
  //   },
  //   buttonsIcon:{
  //       fontSize:40,
  //       color:"#3498db",
  //       shadowColor:" 0 6px 6px rgba(0, 0, 0, 0.6);"
  //   },
});
