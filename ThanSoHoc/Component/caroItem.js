import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <ImageBackground source={item.src} style={styles.cardView}>
      <View style={styles.text}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.num}>{item.num}</Text>
        <Text style={styles.spec}>{item.special}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 1.7,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
  },
  text: {
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: 'helveticaneueitalic',
  },
  num: {
    fontSize: 45,
    fontFamily: 'helveticaneuemedium',
  },
  content: {
    fontSize: 16,
    fontFamily: 'helveticaneue',
  },
  spec: {
    fontSize: 19,
    fontWeight: '500',
    fontFamily:'helveticaneuemedium'
  }
});

export default CarouselItem;
