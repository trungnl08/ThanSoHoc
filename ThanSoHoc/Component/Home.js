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
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

  const [name, setName] = useState('')

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{alignItems: 'center', padding: 10}}>
        <Text>Họ và tên</Text>
        <View style={{paddingBottom: 50}}>

          <TextInput placeholder="....." onChangeText={text => setName(text)}></TextInput>
        </View>
        <Text>Ngày sinh</Text>
        <DatePicker
          mode="date"
          date={date}
          onDateChange={setDate}
          androidVariant="nativeAndroid"
          fadeToColor="#fff"
        />
      </View>
      <Text style={{textAlign:"center"}}>Giới tính</Text>
      <View style={styles.sex}>

      <View>
        
        <Text>Nam</Text>
        <CheckBox
    disabled={false}
    value={toggleCheckBox1}
    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
        />
        </View>
        <View>
        <Text>Nữ</Text>
        <CheckBox
    disabled={false}
    value={toggleCheckBox2}
    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
  />
        </View>
        <View>
        <Text>Khác</Text>
        <CheckBox
    disabled={false}
    value={toggleCheckBox3}
    onValueChange={(newValue) => setToggleCheckBox3(newValue)}
  />
        </View>
      </View>

      <Button
        title="Go"
        onPress={() => {
          navigation.navigate('Carousel', {
            //truyen value input sang carousel screen
            P1: date.getDate() + 1 + date.getFullYear() + date.getMonth(),
            P2: name.toLowerCase()
          });
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sex: {
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: "space-around"
  }
})
export default HomeScreen;
