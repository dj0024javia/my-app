import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-community/picker'
const StudentDropDown = ({ callback, }) => {


    const [standard, setStandard] = useState("Junior KG")

    useEffect(() => {
        if (standard) {
            callback(standard)
        }

        return () => {

        }
    }, [standard])

    return (
        <View style={styles.birthdateDropDown}>
            <Picker
                selectedValue={standard}
                style={{ height: 50, width: 300, paddingLeft: 10 }}
                onValueChange={(itemValue, itemIndex) => setStandard(itemValue)}
            >
                <Picker.Item label="Junior KG" value="Junior KG" />
                <Picker.Item label="Senior KG" value="Senior KG" />
                <Picker.Item label="1st Standard" value="1st Standard" />
                <Picker.Item label="2nd Standard" value="2nd Standard" />
                <Picker.Item label="3rd Standard" value="3rd Standard" />
                <Picker.Item label="4th Standard" value="4th Standard" />
                <Picker.Item label="5th Standard" value="5th Standard" />
            </Picker>
        </View>
    )

}

export default StudentDropDown

const styles = StyleSheet.create({
    birthdateDropDown: {
        paddingLeft: 10,
    }
})
