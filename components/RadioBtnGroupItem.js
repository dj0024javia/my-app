import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton, TextInput } from 'react-native-paper'

const RadioBtnGroupItem = ({ value, visible = true }) => {
    return (


        <View style={styles.radioGroupComponent}>
            {visible ? <RadioButton value={value} /> : null}

            <Text style={styles.radiobtnText}>{value}</Text>
        </View>

    )
}

export default RadioBtnGroupItem

const styles = StyleSheet.create({
    radioGroupComponent: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        padding: 10,

    },
    radiobtnText: {
        paddingLeft: 5,
    }
})
