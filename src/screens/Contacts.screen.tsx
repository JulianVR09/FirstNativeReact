import React from 'react';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Plus from '../assets/svgs/plus.svg';
import SearchComponent from '../components/Search.component';
import { useContacts } from '../hooks/UseContacts';
import ContactManager from '../components/ContactManager';
import ContactList from '../components/CardContact';

const {width} = Dimensions.get('screen');

const ContactsScreen = () => {
  const {
    contacts,
    selectedContact,
    modalVisible,
    openModal,
    closeModal,
    addOrEditContact,
    deleteContact,
  } = useContacts();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contacts</Text>
        <TouchableOpacity style={styles.iconSvg} onPress={() => openModal()}>
          <Plus width={width * 0.1} height={width * 0.1} />
        </TouchableOpacity>
      </View>
      <View>
        <SearchComponent
        placeholder='Search contact'
        onSearch={term => console.log('Término de búsqueda:', term)}/>
      </View>

      <ContactList contacts={contacts} onSelectContact={openModal}/>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContent}>
          <ContactManager
            contact={selectedContact}
            onAddContact={addOrEditContact}
            onDeleteContact={deleteContact}
            onClose={closeModal}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#2E84B2',
  },
  iconSvg: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  }
});
