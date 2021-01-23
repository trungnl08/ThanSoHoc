import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
  } from 'react-native';
const StartScreen =({navigation})=> {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text>Bắt đầu</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6d9bfc',
        width: '55%',
        padding: 5,
        textAlign: 'center',
        marginTop: 40,
        alignSelf:'center'
    }
})

export default StartScreen