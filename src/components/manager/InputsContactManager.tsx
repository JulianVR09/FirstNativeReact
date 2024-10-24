// ContactForm.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import InputGeneric from '../InputGeneric';

interface ContactFormProps {
  name: string;
  phone: string;
  email: string;
  photo: string | null;
  setName: (text: string) => void;
  setPhone: (text: string) => void;
  setEmail: (text: string) => void;
  selectImage: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
  selectImage,
}) => {
  return (
    <View style={styles.container}>
      <InputGeneric placeholder="Name" value={name} onChangeText={setName} />
      <InputGeneric placeholder="Phone" value={phone} onChangeText={setPhone} />
      <InputGeneric placeholder="Email" value={email} onChangeText={setEmail} />

      <TouchableOpacity style={styles.photoButton} onPress={selectImage}>
        <Text>Select Photo</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  photoButton: {
    marginBottom: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: 350,
    alignItems: 'baseline',
  },
  photo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default ContactForm;