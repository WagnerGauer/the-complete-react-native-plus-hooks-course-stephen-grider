import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const friends = [
        {name: "Friend #1", age: 23},
        {name: "Friend #2", age: 34},
        {name: "Friend #3", age: 43},
        {name: "Friend #4", age: 21},
        {name: "Friend #5", age: 32},
        {name: "Friend #6", age: 43},
        {name: "Friend #7", age: 26},
        {name: "Friend #8", age: 76},
        {name: "Friend #9", age: 29},
    ]



    return (
    <FlatList
        // horizontal 
        // showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>
        }}
    />
)
};

const styles = StyleSheet.create({
 textStyle: {
    marginVertical: 50
 }
})

export default ListScreen