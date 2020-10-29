import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'
import db from '../../app/database/firebaseDB'
import DatePicker from '../../components/DatePicker'
import getRandomString from '../../components/generateRollNo'
import RadioBtnGroupItem from '../../components/RadioBtnGroupItem'
import StudentDropDown from '../../components/StudentDropDown'
import MainScreen from './MainScreen'



const StudentRegistration = ({ route }) => {
    const { callback } = route.params
    const [gender, setGender] = useState('Male')
    const [birthdate, setBirthDate] = useState("2016-05-15")
    const [imageURL, setImageUrl] = useState('https://www.galaxyskills.org/wp-content/uploads/2019/02/dummy-350x350.png')
    // const [rollno, setRollNo] = useState(getRandomString(20))
    const rollno = 'RollNo Will be generated after submitting the details.'
    const [name, setName] = useState('')
    const [standard, setStandard] = useState()

    let Image_Http_URL = { uri: imageURL }

    // Saves data in the firestore.
    async function storeHighScore() {
        // creates doc id and then adds data to it
        // const rollno = await db.collection('students').add({}).then(docid => docid.id)
        let rollno = Math.floor(Math.random() * 10000)
        // const docDetails = db.collection('students').doc(rollno).get()
        // console.log(docDetails)
        console.log(rollno)
        // verification for name and birthdate to check not null.
        if (rollno && name && birthdate) {
            // await db.collection('students').doc(rollno).set({
            //     studentId: rollno,
            //     name: name,
            //     imageURL: imageURL,
            //     birthdate: birthdate,
            //     gender: gender,
            //     standard: standard,
            // }).then(() => alert(`Student registered with Student Id: ${rollno} Successfully! You can refer dashboard for confirmation.`))
            //     .catch((error) => alert('An Error Occured,', error))

            let studentData = [{
                studentId: rollno,
                name: name,
                imageURL: imageURL,
                birthdate: birthdate,
                gender: gender,
                // standard: standard,
            }]
            let dataParsed = null
            // const tempStudentData = []
            try {
                const getData = await AsyncStorage.getItem(standard)
                if (getData !== null) {
                    // We have data. Key is not new!
                    // console.log("GEtDATA:", getData)
                    dataParsed = JSON.parse(getData)

                    // console.log(dataParsed)
                    dataParsed = dataParsed.concat(studentData[0])
                    // dataParsed.append(studentData)
                }
                else {
                    dataParsed = studentData

                }
                await AsyncStorage.setItem(standard, JSON.stringify(dataParsed))
                const storage = await AsyncStorage.getItem(standard)
                // console.log(storage)
                alert(`Student registered with Student Id: ${rollno} Successfully! You can refer dashboard for confirmation.`)
                callback()
            }
            catch (e) {
                console.log('An Error Occured. Contact Admin with this error for resolution:--', e)
            }

        } else if (!name) {
            alert("Name cannot be Empty")
        }
        else if (!birthdate) {
            alert("Birthdate cannot be Empty")
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.rollno}>
                <Text>Roll Number</Text>
                <TextInput value={rollno} editable={false} />
            </View>

            <View style={styles.name}>
                <Text>Student Name</Text>
                <TextInput placeholder="Enter Student Name Here" value={name} onChangeText={name => setName(name)} />
            </View>


            <View style={styles.standard}>
                <Text style={styles.stdText}>Standard</Text>
                <StudentDropDown callback={setStandard} />
            </View>

            <View style={styles.gender}>
                <Text>Gender</Text>
                <View style={styles.genderRadioBtn}>
                    <RadioButton.Group
                        onValueChange={gender => setGender(gender)}
                        value={gender}
                    >
                        <RadioBtnGroupItem value="Male" />
                        <RadioBtnGroupItem value="Female" />
                    </RadioButton.Group>
                </View>
            </View>

            <View style={styles.birthdate}>
                <Text style={styles.birthdateText}>BirthDate</Text>
                <DatePicker callback={setBirthDate} />
            </View>

            {/* <View>
                <TextInput placeholder="Student Image" value={Image_Http_URL} onChangeText={(Image_Http_URL) => setImageURL(Image_Http_URL)} />
                <Image source={Image_Http_URL} style={{ height: 150, resizeMode: 'contain', margin: 5 }} />
            </View> */}

            <View style={styles.submitButton}>
                <Button onPress={() => storeHighScore(name, birthdate, imageURL, gender, standard)}>Submit</Button>
            </View>


        </View>
    )
}

export default StudentRegistration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        margin: 5
    },
    rollno: {
        padding: 5,
        margin: 5
    },
    name: {
        padding: 5,
        margin: 5,
    },
    standard: {
        padding: 5,
        margin: 5,

    },
    gender: {
        padding: 5,
        margin: 5,
    },
    birthdate: {
        width: 200,
        flexDirection: "row",
        padding: 5,
        margin: 5,
        flex: 1,
        justifyContent: "space-between"
    },
    stdText: {
        paddingRight: 10
    },
    birthdateText: {
        paddingRight: 5,
        marginRight: 80
    }

})
