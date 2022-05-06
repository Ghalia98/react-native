import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({ title, imgSrc, score }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image style={styles.imageStyle} source={imgSrc} />
            <Text>Score - {score}</Text>
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({
    imageStyle: {
        height: 150,
        width: 150
    }
})