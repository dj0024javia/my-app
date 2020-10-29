import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ style, callback }) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;

        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        callback(currentDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    return (
        <View>
            <View style={styles.style}>
                <Button onPress={showDatepicker} title="Select Birthdate" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

export default DatePicker

const styles = StyleSheet.create({})
