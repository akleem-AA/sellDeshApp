import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomStyle from '../staticFeature/CustomStyle'

const CustomInput = ({ name = 'Default', placeholder = "placeholder", onChangeText, value }) => {
    return (
        <View>
            <Text style={[CustomStyle.text, styles.label]}>{name}</Text>

            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        height: 55,
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center'
    },
    textInput: {
        paddingLeft: 10,
        fontSize: 16
    },

})