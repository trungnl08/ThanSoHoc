import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setName] = useState('')

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{alignItems: 'center', padding: 10}}>
        <View style={{paddingBottom: 50}}>
          <Text>Full name :</Text>

          <TextInput placeholder="....." onChangeText={text => setName(text)}></TextInput>
        </View>
        <Text>Ngay sinh</Text>
        <DatePicker
          mode="date"
          date={date}
          onDateChange={setDate}
          androidVariant="nativeAndroid"
          fadeToColor="#fff"
        />
      </View>
      <Text>Gioi tinh</Text>

      <Button
        title="Go"
        onPress={() => {
          navigation.navigate('Carousel', {
            P1: date.getDate() + 1 + date.getFullYear() + date.getMonth(),
            P2: name.toLowerCase()
          });
        }}></Button>
    </View>
  );
};
export default HomeScreen;
