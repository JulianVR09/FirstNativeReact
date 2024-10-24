import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Contact} from '../interfaces/Contact.interface';
import Header from './manager/HeaderContactManager';
import ContactForm from './manager/InputsContactManager';
import ButtonSection from './manager/ButtonSection';
import DeleteModal from './manager/DeleteModal';
import useContactManager from '../hooks/UseContactManager';


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
      />

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
});
export default ContactManager;