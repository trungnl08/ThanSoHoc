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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TrackPlayer from 'react-native-track-player';
import services from '../services';

const track = { 
  url: require('../lilo.m4a'),
}

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date('2000-06-28'));
  const [gender, setGender] = useState('others');
  const [name, setName] = useState('');
  const [err, setErr] = useState('');


  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('run');
      });
      await TrackPlayer.add([track])
      await TrackPlayer.play()
      await TrackPlayer.setVolume(0.3)
     
      setTimeout(() => {
        TrackPlayer.stop()
      }, 10000)
    })()
  }, [])


  return (
    <KeyboardAvoidingView style={styles.all}>
      <ImageBackground
        source={require('./91317.jpg')}
        style={{flex: 1,position:'absolute',width:'100%', height:'100%'}}>
        <View style={{alignItems: 'center', padding: 8, paddingTop: 22}}>
          <Text style={styles.title}>Tên đầy đủ</Text>
          <View style={styles.names}>
            <TextInput
              placeholder="Nhập tên đầy đủ ..."
              onChangeText={(text) => setName(text)}
              value={name}
            ></TextInput>
            {!!err && (<Text style={{ color: 'red' }}>{err}</Text>)}
          </View>
          <Text style={styles.title}>Ngày sinh</Text>

          <DatePicker
            mode="date"
            date={date}
            onDateChange={setDate}
            androidVariant="nativeAndroid"
            fadeToColor="#fff"
            backgroundColor="#e5e5eb"
          />
        </View>
        <Text style={styles.title}>Giới tính</Text>
        <View style={styles.sex}>
          <View>
            <Text style={styles.smallSex}>Nam</Text>
            <CheckBox
              disabled={false}
              value={gender === 'male'}
              onValueChange={() => setGender('male')}
            />
          </View>
          <View>
            <Text style={styles.smallSex}>Nữ</Text>
            <CheckBox
              disabled={false}
              value={gender === 'female'}
              onValueChange={() => setGender('female')}
            />
          </View>
          <View>
            <Text style={styles.smallSex}>Khác</Text>
            <CheckBox
              disabled={false}
              value={gender === 'others'}
              onValueChange={() => setGender('others')}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (name.trim() === '') {
                setErr('Vui lòng nhập tên của bạn !!')
              } else {
                setErr(null)
                navigation.navigate('Carousel', {
                  //truyen value input sang carousel screen
                  P1: date.getDate() + 1 + '/' + date.getFullYear() + '/' + date.getMonth(),
                  P2: name.toLowerCase(),
                });
              }
            }}
            style={styles.button1}>
            <Text style={styles.butt}>Khám phá vận mệnh</Text>
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
    fontFamily: 'helveticaneue',
    fontSize: 14,
    fontWeight: '600',
  },
  button1: {
    width: '65%',
    alignItems: 'center',
    backgroundColor: '#6d9bfc',
    padding: 10,
    borderRadius: 11,
    alignSelf: 'center',
  },
  all: {
    backgroundColor: '#fff',
    flex: 1,
  },
  names: {
    borderColor: '#E5E5EA',
    borderWidth: 0.6,
    backgroundColor: '#F1F1F3',
    borderRadius: 7,
    padding: 3,
    width: '80%',
    opacity: 0.75,
  },
  title: {
    fontFamily: 'helveticaneuelight',
    fontSize: 18,
    padding: 15,
    fontWeight: '700',
    alignSelf: 'center',
  },
  butt: {
    fontSize:18
  }
});
export default HomeScreen;
