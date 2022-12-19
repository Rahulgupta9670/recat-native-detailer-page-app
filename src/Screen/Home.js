// import {
//   Image,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// const Homescreen = ({ navigation }) => {
//   const alldata = [
//     [
//       require('../asstest/images/product/junior_hlx.png'),
//       require('../asstest/images/product/JuniorHlx.png'),
//       require('../asstest/images/product/Page-1.png'),
//       require('../asstest/images/product/Page-2.png'),
//     ],
//     [
//       require('../asstest/images/product/boost.png'),
//       require('../asstest/images/product/boosts.png'),
//       require('../asstest/images/product/Page-7.png'),
//       require('../asstest/images/product/Page-8.png'),
//     ],
//     [

//       require('../asstest/images/product/choco_hlx.png'),
//       require('../asstest/images/product/Standard&ChocoateHorlicks.png'),
//       require('../asstest/images/product/Page-5.png'),
//       require('../asstest/images/product/Page-6.png'),
//     ],
//     [

//       require('../asstest/images/product/hlx_original.png'),
//       require('../asstest/images/product/Standard&ChocoateHorlicks.png'),
//       require('../asstest/images/product/Page-3.png'),
//       require('../asstest/images/product/Page-4.png'),
//     ],
//     [

//       require('../asstest/images/product/women_hlx.png'),
//       require('../asstest/images/product/Women.png'),
//       require('../asstest/images/product/newFile/Page-13.png'),
//       require('../asstest/images/product/newFile/Page-14.png'),
//     ],
//     [

//       require('../asstest/images/product/lite_hlx.png'),
//       require('../asstest/images/product/Horlicks-Lite.png'),
//       require('../asstest/images/product/newFile/HorlicksLite-1a.png'),
//       require('../asstest/images/product/newFile/HorlicksLite-1b.png'),
//       require('../asstest/images/product/newFile/HorlicksLite-1c.png'),
//       require('../asstest/images/product/newFile/Horlicks-Lite-1d.png'),
//       require('../asstest/images/product/newFile/HorlicksLite-1e.png'),
  
//     ],
//     [

//       require('../asstest/images/product/hlx_protein+.png'),
//       require('../asstest/images/product/Protein.png'),
//       require('../asstest/images/product/newFile/P-1a.png'),
//       require('../asstest/images/product/newFile/P-1b.png'),
//       require('../asstest/images/product/newFile/P-1c.png'),
//       require('../asstest/images/product/newFile/P-1d.png'),
//       require('../asstest/images/product/newFile/P-1e.png'),
//       require('../asstest/images/product/newFile/P-1f.png'),
//     ],
//     [

//       require('../asstest/images/product/hlx_diabetes.png'),
//       require('../asstest/images/product/Diabetes-Plus.png'),
//       require('../asstest/images/product/newFile/D-1a.png'),
//       require('../asstest/images/product/newFile/D-1b.png'),
//       require('../asstest/images/product/newFile/D-1c.png'),
//       require('../asstest/images/product/newFile/D-1d.png'),
//       require('../asstest/images/product/newFile/D-1e.png'),
//       require('../asstest/images/product/newFile/D-1f.png'),
//       require('../asstest/images/product/newFile/D-1g.png'),


//     ],
//     [

//       require('../asstest/images/product/mothers_hlx.png'),
//       require('../asstest/images/product/Mothers.png'),
//       require('../asstest/images/product/M+Page-1.png'),
//       require('../asstest/images/product/M+Page-2.png'),
//     ]
//   ];
//   return (
//     <ImageBackground
//       source={require('../asstest/images/product/HomePagebg.png')}
//       resizeMode="stretch"
//       style={styles.backgroundImage}>
//       <View style={styles.homeMain}>
//         <View style={styles.homeProduct}>
//           {alldata.map((item, i) => {
//             const imagess = item;

//             return (
//               <TouchableOpacity
//                 key={i}
//                 style={
//                   i == 7 || i == 8 ? styles.headerTittle4 : styles.headerTittle3
//                 }
//                 onPress={() =>
//                   navigation.navigate('DetailsPage', { data: imagess })
//                 }>
//                 <Image
//                   style={styles.headerItemImage}
//                   resizeMode="stretch"
//                   source={item[0]}
//                 />
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       </View>
//       <View style={styles.copy_Right}>
//         <Text style={styles.copy_Right_p}>Copyright © CPM India</Text>
//       </View>
//     </ImageBackground>
//   );
// };
// export default Homescreen;
// const styles = StyleSheet.create({
//   homeMain: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     with: '100%',
//     height: '100%',
//   },
//   homeProduct: {
//     flexDirection: 'row',
//     width: '100%',
//     paddingHorizontal: 20,
//     height: 100,
//   },
//   copy_Right: {
//     flexDirection: 'row',

//     justifyContent: 'space-between',
//     padding: 15,
//     marginLeft: 20,
//     marginTop: -70,
//     // backgroundColor:"#fff"
//   },
//   copy_Right_p: {
//     color: '#fff',
//   },

//   backgroundImage: {
//     flex: 1,
//     height: '100%',
//   },
//   headerTittle3: {
//     // width: 110,
//     width: '9%',
//     marginTop: -40,
//     marginLeft: 5,
//     height: 250,
//   },
//   headerTittle4: {
//     width: '13%',
//     height: '100%',
//     marginTop: -40,
//     marginLeft: 10,
//     height: 250,
//   },
//   headerTittle5: {
//     width: 160,
//     // height:"100%",
//     marginTop: -40,
//     height: 220,
//   },
//   headerItemImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
// });