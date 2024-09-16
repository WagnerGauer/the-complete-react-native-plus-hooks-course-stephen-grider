import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"; 

const ImageDetail = (props) => {
    console.log(props.image)
    return <View>
        <Image source = {props.image}/>
        <Text>{props.title}</Text>
        <Text>Image Score - {props.score}</Text>
        <Text>dog</Text>
    </View>
    
};

const styles = StyleSheet.create({});

export default ImageDetail;