import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Contact} from '../interfaces/Contact.interface';
import Header from './manager/HeaderContactManager';
import ContactForm from './manager/InputsContactManager';
import ButtonSection from './manager/ButtonSection';
import DeleteModal from './manager/DeleteModal';
import useContactManager from '../hooks/UseContactManager';
import MapScreen from '../screens/Map.screen';
import WeatherImg from './WeatherImg';

interface ContactManagerProps {
  contact: Contact | null;
  onAddContact: (contact: Contact) => void;
  onDeleteContact: (contact: Contact) => void;
  onClose: () => void;
}

const ContactManager: React.FC<ContactManagerProps> = ({
  contact,
  onAddContact,
  onDeleteContact,
  onClose,
}) => {
  const {
    name,
    phone,
    email,
    photo,
    deleteModalVisible,
    setName,
    setPhone,
    setEmail,
    selectImage,
    saveContact,
    takePhoto,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete,
  } = useContactManager({contact, onAddContact, onDeleteContact});

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header photo={photo} />

        <ContactForm
          name={name}
          phone={phone}
          email={email}
          photo={photo}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          selectImage={selectImage}
          takePhoto={takePhoto}
        />
        
        <MapScreen />

        <ButtonSection
          contact={contact}
          saveContact={saveContact}
          onClose={onClose}
          openDeleteModal={openDeleteModal}
        />

        <DeleteModal
          visible={deleteModalVisible}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
          contactName={contact?.name}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherCard: {
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    width: 100,
    height: 130,
    flexDirection: 'row',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    marginTop: 10,
  },
  weatherText: {fontSize: 30, color: '#FFF', marginTop: 10},
  weatherDescription: {
    fontSize: 14,
    color: '#808b96',
    textTransform: 'capitalize',
    width: 140,
  },
});
export default ContactManager;
