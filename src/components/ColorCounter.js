import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ColorCounter = ({color, value, update}) => {
    
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => update(value < 255 ? value + 1 : value)} title= {`Increase ${color}`}/>
            <Button onPress={() => update(value > 0 ? value - 1 : value)} title= {`Decrease ${color}`}/>
        </View>
    )
}

const style = StyleSheet.create({

})

export default ColorCounter