import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { laySoDon, soKhatTam } from '../thansohoc'
import { dataDuongDoi, dataKhatTam } from './data'
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

  return (
    <View>
      <CarouselT data={setData}/>
    </View>
    

  );
};
export default CarouselScreen;
