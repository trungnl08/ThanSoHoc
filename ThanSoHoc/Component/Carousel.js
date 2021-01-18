import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
  
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { laySoDon, soKhatTam, soNhanCach, soDinhMenh } from '../thansohoc'
import { dataDuongDoi, dataKhatTam, dataNhanCach, dataDinhMenh } from './data'
import CarouselT from './caroT'


const CarouselScreen = ({route, navigation}) => {
  const { P1, P2 } = route.params;
  

  //Tao array de push data cua cac So hoc sau khi tinh toan va so sanh
  let setData = new Array()
  const check = (e,ind) => {
    for (let i = 0; i < e.length; i++){
      if (e[i].num === ind) {
        setData.push(e[i]);
      }
    }
  }
  //push data
  check(dataDuongDoi, laySoDon(parseInt(P1)))
  check(dataKhatTam, soKhatTam(P2));
  check(dataDinhMenh, soDinhMenh(P2));
  check(dataNhanCach, soNhanCach(P2));

  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
      <ImageBackground source={require('./4238568.jpg')} style={styles.bg}>
    <View style={{paddingTop:"37%", paddingBottom:18}}>
      <CarouselT data={setData}/>
      </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.button}>
        <Text>bubmbmbmbm</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    

  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:"center",alignSelf:'center', backgroundColor:'#3d7afc', padding:4
  },
  bg: {
    flex:1, resizeMode:'cover'
  }
})
export default CarouselScreen;
