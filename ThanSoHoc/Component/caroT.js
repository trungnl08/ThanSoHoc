import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import CarouselItem from './caroItem';

const {width, heigth} = Dimensions.get('window');
let flatList;

const CarouselT = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);
    const [textD,setTextD]=useState('')
  let x;

  useEffect(() => {
    setDataList(data);
  });

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(ref) => {
            this.flatList = ref;
          }}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#595959',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
            </View>
       
        <TouchableOpacity
          style={{backgroundColor: 'blue', alignItems: 'center'}}
          onPress={() => this.flatList.scrollToIndex({index: 3})}>
          <Text>Sang trai</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'blue', alignItems: 'center'}}
          onPress={() => this.flatList.scrollToIndex({index: 2})}>
          <Text>Sang phai</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default CarouselT;
