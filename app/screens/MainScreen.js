import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import db from '../../app/database/firebaseDB'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import StudentView from '../../components/view/StudentView';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = ({ navigation }) => {

    const [allstudents, setAllStudents] = useState([])

    const setUpStorage = async () => {
        try {
            setAllStudents([])
            const storageSections = await AsyncStorage.getAllKeys()
            // console.log("storageSection: ", storageSections)
            if (storageSections) {
                storageSections.map(async (section) => {
                    let temp = await AsyncStorage.getItem(section)
                    if (temp !== null) {
                        // Section is not empty.
                        // console.log('Section Name:', section)

                        let data = JSON.parse(temp)
                        // console.log('Section Details:', data)
                        setAllStudents(allstudents => [...allstudents, { key: section, value: data }])

                        // console.log()
                    }
                    else {
                        // Section is Empty.
                        console.log("section is empty")
                    }

                    // const 
                    // setAllStudents(allstudents=> (
                    //     {...allstudents, 
                    //         section: [...allstudents.section, ]}
                    // ))
                })
            }
            else {
                console.log("Store is empty")
            }

        }
        catch (e) {
            console.log(e)
        }
    }
    // Fetches all the students from the firebase db at the start of the app.
    useEffect(() => {
        // Firebase Storage

        // db.collection('students').onSnapshot((snapshot) => {
        //     if (!snapshot.empty) {
        //         setAllStudents(snapshot.docs.map(doc => doc.data()))
        //     }
        // })

        setUpStorage()
        // console.log(allstudents)
        // Async LocalStorage


    }, [])

    return (
        <ScrollView style={{ width: "100%", paddingTop: 60, }}>
            {/* Student Details displayed group by glass */}
            <StudentView data={allstudents} />
            {/* Register Student */}
            <Button onPress={() => navigation.navigate("StudentRegistration", {
                callback: setUpStorage,
            })}>Go To Student Registration</Button>
        </ScrollView>




    )
}

export default MainScreen

const styles = StyleSheet.create({})
