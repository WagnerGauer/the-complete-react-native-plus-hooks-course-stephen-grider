import React, { useState } from "react";
import { View, Text,  StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)


    console.log(red, green, blue)

    return (
        <View>
            <ColorCounter update = {(num) => setRed(num)} value = {red} color="red"/>
            <ColorCounter update = {(num) => setGreen(num)}  value = {green} color="green"/>
            <ColorCounter update = {(num) => setBlue(num)}  value = {blue} color="blue"/>
            <View style = {{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

const style = StyleSheet.create({


});

export default SquareScreen
