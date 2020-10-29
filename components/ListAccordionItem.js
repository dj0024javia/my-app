import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper'

const ListAccordionItem = ({ title, data }) => {
    return (
        // receives details from the parent and returns the reusable code with custom modifications.
        <List.Accordion
            title={title}
            left={props => <List.Icon {...props} icon="folder" />}
        >
            {
                data ?
                    data.map((student) => <List.Item title={student.name} key={student.studentId} />
                    ) : null
            }


        </List.Accordion>
    )
}

export default ListAccordionItem

const styles = StyleSheet.create({})
