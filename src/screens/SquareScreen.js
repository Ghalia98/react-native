import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    console.log(red, green, blue)

    // helper function
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
            default:
                return;
        }
    }
    return (
        <View>
            <Text>SquareScreen</Text>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green" />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Blue" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>

            </View>
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({})