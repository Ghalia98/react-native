import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button title="Components Demo" onPress={() => navigation.navigate('Components')} />
    <Button title="List Demo" onPress={() => navigation.navigate('List')} />
    {/* <TouchableOpacity onPress={() => console.log('Text pressed!')}>
      <Text>
        List Demo
      </Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
