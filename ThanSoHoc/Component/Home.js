import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{alignItems: 'center', padding: 10}}>
        <View>
          <Text>Full name :</Text>

          <TextInput placeholder="....."></TextInput>
        </View>
        <DatePicker mode="date" date={date} onDateChange={setDate} />
        {console.log(date)}
        <Button
          title="Go"
          onPress={() => navigation.navigate('Carousel')}></Button>
      </View>
    </View>
  );
};
export default HomeScreen;
