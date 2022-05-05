import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    const name = 'Ghalia';
    return (
        <View>
            <Text style={styles.headingStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeadingStyle}>My name is {name}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    subHeadingStyle: {
        fontSize: 20
    }
})
export default ComponentsScreen