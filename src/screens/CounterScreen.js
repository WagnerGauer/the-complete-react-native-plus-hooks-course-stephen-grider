import React, {useReducer} from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const reducer = (state, action) => {
    switch(action.type) {
        case "change":
            return {...state, count: state.count + action.payload}
        default:
            return state
    }

}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer,{count: 0})

    return <View>
        <Button title="Increase" onPress={() => {
            dispatch({type:"change", payload: 1})
        }}/>
        <Button title="decrease" onPress={() => {
            dispatch({type: "change", payload: -1})
        }}/>
        <Text>Current Count: {state.count}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen