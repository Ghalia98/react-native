import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title='Pasta' imgSrc={require('../../assets/pasta.jpg')} score='10' />
            <ImageDetail title='Pizza' imgSrc={require('../../assets/pizza.jpg')} score='8' />
            <ImageDetail title='Burger' imgSrc={require('../../assets/burger.jpg')} score='5' />
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})