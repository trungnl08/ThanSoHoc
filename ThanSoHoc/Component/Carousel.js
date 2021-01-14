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


const CarouselScreen = ({route, navigation}) => {
  const { P1, P2 } = route.params;
  
  let setData = new Array()
  const check = (e,ind) => {
    for (let i = 0; i < e.length; i++){
      if (e[i].num === ind) {
        setData.push(e[i]);
      }
    }
  }
  check(dataDuongDoi, laySoDon(parseInt(P1)))
  check(dataKhatTam, soKhatTam(P2));

  

  return (
    <View>
          <Text>duong theo ngay sinh {laySoDon(P1)} </Text>
      <Text> duong khat tam {soKhatTam(P2)}</Text>
      {setData.map((item, index) => {
        return (
          <View  key={index}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )
      })}
    </View>
  );
};
export default CarouselScreen;
