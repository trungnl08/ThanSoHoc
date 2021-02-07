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
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { soKhatTam, soNhanCach, soDinhMenh, duongDoiSo} from '../thansohoc';
import {dataDuongDoi, dataKhatTam, dataNhanCach, dataDinhMenh,dataTuVi,data1Nua} from './data';
import CarouselT from './caroT';
import admob, { firebase, MaxAdContentRating } from '@react-native-firebase/admob';
import {
  BannerAd,
  BannerAdSize,
  AdEventType,
  InterstitialAd,
  TestIds,
} from '@react-native-firebase/admob';



const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-8283090293065428/5407754053', {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing', 'game', 'shopee'],
});



const CarouselScreen = ({route, navigation}) => {
  const {P1, P2} = route.params;

  //Tao array de push data cua cac So hoc sau khi tinh toan va so sanh
  let setData = new Array();
  const check = (e, ind) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i].num === ind) {
        setData.push(e[i]);
      }
    }
  };
  //push data
  check(dataDuongDoi, duongDoiSo(P1));
  check(dataNhanCach, soNhanCach(P2));
  check(dataKhatTam, soKhatTam(P2));
  check(dataTuVi, duongDoiSo(P1))
  check(dataDinhMenh, soDinhMenh(P2));
  check(data1Nua, (10 - duongDoiSo(P1)));
  
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

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground source={require('./91317.jpg')} style={styles.bg}>
        <View style={{paddingTop: '18%', paddingBottom: 18}}>
          <CarouselT data={setData} />
          <Text style={styles.names}>Cuộn trái, phải để xem các con số và đường đời khác của bạn</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            interstitial.show()
            navigation.navigate('Home')
          }}
          style={styles.button}>
          <Text style={{fontSize: 18}}>Trở về</Text>
        </TouchableOpacity>
        <View style={{marginTop:50}}>
        <BannerAd
      unitId='ca-app-pub-8283090293065428/7288452560'
          size={BannerAdSize.SMART_BANNER}/>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '65%',
    alignItems: 'center',
    backgroundColor: '#6d9bfc',
    padding: 10,
    borderRadius: 11,
    alignSelf: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  names: {
    borderColor: '#E5E5EA',
    borderWidth: 0.6,
    backgroundColor: '#F1F1F3',
    borderRadius: 7,
    padding: 3,
    width: '88%',
    opacity: 0.6,
    fontSize: 11.4,
    textAlign: "center",
    alignSelf:"center"
  },
});
export default CarouselScreen;
