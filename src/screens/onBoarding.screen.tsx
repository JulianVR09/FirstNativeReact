import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/navigation.interface';
import { useNavigation } from '@react-navigation/native';


const OnBoardingScreen = () => {
    const navigation = useNavigation<RootStackParamList>()
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#D9D9D9',
                    image: <Image
                    style={styles.image} 
                    source={require('../assets/img/metallic-3d-abstract-shiny-metal-form-7.png')} />,
                    title: 'Welcome',
                    subtitle: 'An amazing experience awaits', 
                },
                {
                    backgroundColor: '#C6DB0A',
                    image: <Image style={styles.image} source={require('../assets/img/metallic-3d-abstract-shiny-metal-form-8.png')} />,
                    title: 'Connect with your team',
                    subtitle: 'Collaborate seamlessly',
                },
                {
                    backgroundColor: '#2E84B2',
                    image: <Image style={styles.image} source={require('../assets/img/metallic-3d-abstract-colorful-form-9.png')} />,
                    title: 'Keep track of your contacts',
                    subtitle: 'Stay organized and motivated',
                }
            ]}
        />
    )
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    image:{
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden' 
    }
})