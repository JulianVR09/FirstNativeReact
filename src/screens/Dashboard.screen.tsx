import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const DashboardScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagenDasboard} source={require('../assets/img/metallic-3d-abstract-colorful-form-9.png')} />
      <Text style={styles.textCore}>Welcome to <Text style={styles.textBold}>MetalMesh</Text></Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.textButton}>Get start</Text> 
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create( {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000000',
  },
  textCore:{
    color: '#2E84B2',
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  textBold:{
    fontWeight: 'bold',
    color: '#C6DB0A'
  },
  textButton:{
    color: '#000000'
  },
  button:{
    backgroundColor: '#C6DB0A',
    padding: 10,
    borderRadius: 30,
    width: 200,
    alignItems: 'center'
  },
  imagenDasboard: {
    width: 300,
    height: 350,
    overflow: 'hidden'
  }
} )

export default DashboardScreen;