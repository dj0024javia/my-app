import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper';
import ListAccordionItem from '../ListAccordionItem';

const StudentView = ({ data }) => {

    // console.log(data)
    return (

        <List.Section title="Students Dashboard">
            {/* Reusable component for each class */}
            {data.map((eachSection) =>
                (
                    <ListAccordionItem
                        key={eachSection.key}
                        data={eachSection.value}
                        title={eachSection.key}
                    />
                )
            )}


            {/* <ListAccordionItem
                data={data}
                title="Senior KG"
                value={2} />

            <ListAccordionItem
                data={data}
                title="1st Standard"
                value={3} />


            <ListAccordionItem
                data={data}
                title="2nd Standard"
                value={4} />

            <ListAccordionItem
                data={data}
                title="3rd Standard"
                value={5} />


            <ListAccordionItem
                data={data}
                title="4th Standard"
                value={6} />


            <ListAccordionItem
                data={data}
                title="5th Standard"
                value={7} /> */}

        </List.Section>

    )
}

export default StudentView

const styles = StyleSheet.create({})
