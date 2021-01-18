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
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 1.85,
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
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'helveticaneueitalic',
  },
  num: {
    fontSize: 50,
    fontFamily: 'helveticaneuemedium',
  },
  content: {
    fontSize: 16,
    fontFamily: 'helveticaneue',
  },
});

export default CarouselItem;
