import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ name, onPress, backGroundColor, color }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.viewStyle, { backgroundColor: backGroundColor }]}>
            <Text style={[styles.text, { color: color }]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        padding: 5,
        fontSize: 18,

    }
})