import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView, Platform
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date('2000-06-28'));
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView style={styles.all} behavior={Platform.OS=== 'ios' ? 'padding' : "height"}>
      <ImageBackground source={require('./3294878.jpg')} style={{flex:1, resizeMode:'cover'}}>
      <View style={{alignItems: 'center', padding: 10, paddingTop: 60}}>
        <Text>Họ và tên</Text>
        <View style={{paddingBottom: 50}}>
          <TextInput
            placeholder="Nhập tên đầy đủ ..."
            onChangeText={(text) => setName(text)}></TextInput>
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
      <Text style={{textAlign: 'center', paddingBottom: 30, paddingTop: 20}}>
        Giới tính
      </Text>
      <View style={styles.sex}>
        <View>
          <Text style={styles.smallSex}>Nam</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={(newValue) => {
              setToggleCheckBox1(newValue),
                setToggleCheckBox2(!newValue),
                setToggleCheckBox3(!newValue);
            }}
          />
        </View>
        <View>
          <Text style={styles.smallSex}>Nữ</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => {
              setToggleCheckBox2(newValue),
                setToggleCheckBox1(!newValue),
                setToggleCheckBox3(!newValue);
            }}
          />
        </View>
        <View>
          <Text style={styles.smallSex}>Khác</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={(newValue) => {
              setToggleCheckBox3(newValue),
                setToggleCheckBox2(!newValue),
                setToggleCheckBox1(!newValue);
            }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Carousel', {
              //truyen value input sang carousel screen
              P1: date.getDate() + 1 + date.getFullYear() + date.getMonth(),
              P2: name.toLowerCase(),
            });
          }}
          style={styles.button1}>
          <Text>Khám phá</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  sex: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  smallSex: {
    textAlign: 'center',
    padding: 2,
  },
  button1: {
    width: '55%',
    alignItems: 'center',
    backgroundColor: '#3d7afc',
    padding: 4,
    borderRadius: 12,
    alignSelf: 'center',
  },
  all: {
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 14,
  },
});
export default HomeScreen;
