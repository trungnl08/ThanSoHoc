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

const StartScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.bg} source={require('../Image/tet.jpg')}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Bat Dau</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6d9bfc',
    width: '50%',
    marginTop: '55%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
  },
  bg: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
export default StartScreen;
