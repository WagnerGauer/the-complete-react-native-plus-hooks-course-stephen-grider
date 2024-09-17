import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState("");
    console.log(name)

    return (
        <View>
            <Text>Enter Your Name:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none" // Both IOS and Android autocapitalize the first letter of a text input, this is not always desirable
                autoCorrect={false} // The IOS autocorrects words so for certain text inputs like emails or passwords we do not want that
                onChangeText={(newValue) => setName(newValue)} 
                value= {name}
            />
            <Text>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth:1,
        borderRadius: 5,
        padding: 5,
    }
})

export default TextScreen