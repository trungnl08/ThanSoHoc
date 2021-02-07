import React, {useState, useRef, useEffect} from 'react';
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
  AppState,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TrackPlayer from 'react-native-track-player';
import admob, {
  firebase,
  MaxAdContentRating,
} from '@react-native-firebase/admob';
import {
  BannerAd,
  BannerAdSize,
  AdEventType,
  InterstitialAd,
  TestIds,
} from '@react-native-firebase/admob';

const track = {
  url: require('../lilo1.m4a'),
};
const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing', 'game', 'shopee'],
});

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date('2001-06-28'));
  const [gender, setGender] = useState('others');
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [music, setMusic] = useState('Tắt âm thanh');
  const [mode, setMode] = useState(false);
  const [color1, setColor1] = useState('#e9adb7');
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  //Ads
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  //Effect check background
  // useEffect(() => {
  //   AppState.addEventListener('change', _handleAppStateChange);

  //   return () => {
  //     AppState.removeEventListener('change', _handleAppStateChange);
  //   };

  // }, []);

  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('run');
      });
      await TrackPlayer.add([track]);
      await TrackPlayer.play();
      await TrackPlayer.setVolume(0.4);
    })();
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }, []);

  //Check ben trong or ben ngoai man hinh =>> set Music
  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
    appState.current = nextAppState;
  };

  return (
    <KeyboardAvoidingView style={styles.all}>
      <ImageBackground
        source={require('./91317.jpg')}
        style={{flex: 1, position: 'absolute', width: '100%', height: '100%'}}>
        <View style={{alignItems: 'center', padding: 8, paddingTop: 22}}>
          <Text style={styles.title}>Tên đầy đủ</Text>
          <View style={styles.names}>
            <TextInput
              placeholder="Nhập tên đầy đủ ..."
              onChangeText={(text) => setName(text)}
              value={name}></TextInput>
            {!!err && <Text style={{color: 'red'}}>{err}</Text>}
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
                setErr('Vui lòng nhập tên của bạn !!');
              } else {
                interstitial.show();
                setErr(null);
                navigation.navigate('Carousel', {
                  //truyen value input sang carousel screen
                  P1:
                    date.getDate() +
                    1 +
                    '/' +
                    date.getFullYear() +
                    '/' +
                    date.getMonth(),
                  P2: name.toLowerCase(),
                });
              }
            }}
            style={styles.button1}>
            <Text style={styles.butt}>Khám phá vận mệnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (mode) {
                setMusic('Tắt âm thanh');
                setMode(false);
                setColor1('#e6929f');
                TrackPlayer.play();
              } else {
                setMusic('Bật âm thanh');
                setMode(true);
                setColor1('#b3e2e4');
                TrackPlayer.pause();
              }
            }}
            style={{
              width: '58%',
              alignItems: 'center',
              backgroundColor: color1,
              padding: 10,
              borderRadius: 11,
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <Text style={styles.butt}>{music}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 50}}>
          <BannerAd
            unitId="ca-app-pub-8283090293065428/6367636025"
            size={BannerAdSize.SMART_BANNER}
          />
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
    width: '58%',
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
    fontSize: 18,
  },
});
export default HomeScreen;
