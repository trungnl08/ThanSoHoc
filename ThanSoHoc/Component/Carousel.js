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

import laySoDon from '../thansohoc';
const CarouselScreen = ({route, navigation}) => {
  const {P1,P2} = route.params;
  let duongDoiNgay = laySoDon(parseInt(P1));

  return (
    <View>
          <Text>This is vmvmvmvmv {duongDoiNgay} </Text>
          <Text>{P2}</Text>
    </View>
  );
};
export default CarouselScreen;
