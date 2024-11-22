import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../interfaces/navigation.interface";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = () => {
    const navigation = useNavigation<RootStackParamList>()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                try {
                    await AsyncStorage.setItem('user', JSON.stringify({ name, email, password }));
                    Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión');
                    navigation.navigate('Login');
                } catch (error) {
                    Alert.alert('Error', 'Hubo un problema al registrarse');
                }
            } else {
                Alert.alert('Error', 'Las contraseñas no coinciden');
            }
        } else {
            Alert.alert('Campos requeridos', 'Por favor, llena todos los campos');
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/img/metallic-3d-abstract-colorful-form-9.png')} />
            <TextInput 
                style={styles.input} 
                placeholder="Name" 
                value={name} 
                onChangeText={setName}
                placeholderTextColor="#666" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                keyboardType="email-address"
                placeholderTextColor="#666" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry
                placeholderTextColor="#666" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                secureTextEntry
                placeholderTextColor="#666" 
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.color}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.forgotPasswordText}> Login here.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreen

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
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#2E84B2',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
    },
    color: {
        color: '#C6DB0A'
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
        textAlign: 'center',
    }
});