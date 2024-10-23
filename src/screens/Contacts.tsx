import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const ContactsScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contacts</Text>
            <Image source={require('../svgs/plus.svg')}/>
        </View>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000000',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
        color: '#2E84B2'
    }
})