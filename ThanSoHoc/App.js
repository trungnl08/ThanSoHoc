
import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Component/Home'
import CarouselScreen from './Component/Carousel'
import StartScreen from './Component/Start'

const Stack = createStackNavigator();

const App = () => {
  return (

  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode='none'>
        {/* <Stack.Screen name='Start' component={StartScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Carousel" component={CarouselScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
