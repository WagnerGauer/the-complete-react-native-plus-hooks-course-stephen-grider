import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Wagner"

    return (
    <View>
        <Text style={styles.textStyle}>Getting Started WIth React Native!</Text>
        <Text style={styles.otherText}>My name is {name}</Text>
    </View>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    otherText: {
        fontSize: 20
    }
})

export default ComponentsScreen;