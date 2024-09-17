import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View>
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
        <View style={styles.viewOneStyle}>
            <Text style={styles.textOneStyleTwo}>Child #1</Text>
            <Text style={styles.textTwoStyleTwo}>Child #2</Text>
            <Text style={styles.textThreeStyleTwo}>Child #3</Text>
        </View>
        <View style={styles.viewTwoStyle}>
            <Text style={styles.textOneStyleThree}>Child #1</Text>
            <Text style={styles.textTwoStyleThree}>Child #2</Text>
            <Text style={styles.textThreeStyleThree}>Child #3</Text>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        alignItems: "center",
        flexDirection: "row",
        height: 200,
        justifyContent: "space-evenly"
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: "red",
        // alignSelf: "flex-end"
        left: 60,
        top: 30

    },
    textTwoStyle: {
        // I can make an element fill its entire parent by setting right, left, bottom and top to 0, or I can use ...StyleSheet.absoluteFillObject
        borderWidth: 3,
        borderColor: "red",
        // flex:1,
        position: "absolute",
        // top: 0,
        // bottom: 0,
        // right: 0,
        // left: 0
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
    
    },
    viewOneStyle: {
        borderWidth: 3,
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    
    },
    textOneStyleTwo: {
   
    },
    textTwoStyleTwo: {
    top: 40
   
    },
    textThreeStyleTwo: {
       
    },
    viewTwoStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: "black",
        flexDirection: "row",
        justifyContent: "center",
    },
    textOneStyleThree: {
   
    },
    textTwoStyleThree: {
        position: "absolute",
        // alignSelf: "center"
   
    },
    textThreeStyleThree: {
       
    },
})

export default BoxScreen