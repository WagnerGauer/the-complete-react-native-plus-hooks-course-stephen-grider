import React from "react";
import { View, Text, StyleSheet } from "react-native"; 
import ImageDetail from "../components/ImageDetail";
import { FlatList } from "react-native-gesture-handler";

const ImageScreen = () => {

    const data = [
        {title: "Forest", image: require("../../assets/forest.jpg"), score: 9},
        {title: "Beach", image: require("../../assets/beach.jpg"), score: 7.9},
        {title: "Mountain", image: require("../../assets/mountain.jpg"), score: 9.5}
    ]


    return <View>
        <FlatList
        data={data}
        keyExtractor={(image) => image.title}
        renderItem={({item}) => {
            return <ImageDetail image = {item.image} title = {item.title} score = {item.score}/>
        }} 
        />
       
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;