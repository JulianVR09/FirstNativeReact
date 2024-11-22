import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../interfaces/navigation.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation<RootStackParamList>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
                if (email === storedEmail && password === storedPassword) {
                    Alert.alert('Login Exitoso', '¡Bienvenido!', [
                        {
                            text: 'OK',
                            onPress: () => navigation.navigate('Contacts')
                        }
                    ]);
                } else {
                    Alert.alert('Error', 'Email o contraseña incorrectos');
                }
            } else {
                Alert.alert('Error', 'No hay una cuenta registrada');
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al iniciar sesión');
        }
    };
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/img/metallic-3d-abstract-colorful-form-9.png')} />
            <TextInput style={styles.input} placeholder="Email" value={email} placeholderTextColor="#666"  onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" value={password} placeholderTextColor="#666"  onChangeText={setPassword} secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.button}>
            <Text style={styles.color}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup') }><Text style={styles.forgotPasswordText}>Sing up here.</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#C6DB0A',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#2E84B2',
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#2E84B2',
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    color:{
        color:'#C6DB0A'
    },
    buttonText: {
        color: '#C6DB0A',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2E84B2',
        paddingHorizontal: 25,
        paddingVertical: 6,
        alignContent: 'center',
    }
})