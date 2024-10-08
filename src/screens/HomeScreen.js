import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
       title="Go to Components Demo"
       onPress={() => {
       navigation.navigate("Components")
       }
       }
       />
  <Button
    title="Go to List Demo"
    onPress={() => navigation.navigate("List")}
  />
  <Button
    title="Go Image Demo"
    onPress={() => navigation.navigate("Image")}
  />
  <Button
    title="Go Counter"
    onPress={() => navigation.navigate("Counter")}
  />
  <Button
    title="Go to Color Screen"
    onPress={() => navigation.navigate("Color")}
  />
  <Button
    title="Go to Square Screen"
    onPress={() => navigation.navigate("Square")}
  />
  <Button
    title="Go to Text Demo"
    onPress={() => navigation.navigate("Text")}
  />
  <Button
    title="Go to Box Demo"
    onPress={() => navigation.navigate("Box")}
  />



       {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")
       }>
        <Text>Go to List Demo</Text>
       </TouchableOpacity> */}
    </View>
)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
