import React from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Contact } from '../interfaces/Contact.interface';

interface ContactListProps {
  contacts: Contact[];
  onSelectContact: (contact: Contact) => void;
}

// Función para agrupar los contactos por la primera letra
const groupContactsByLetter = (contacts: Contact[]) => {
  const groupedContacts: { title: string; data: Contact[] }[] = [];

  contacts.forEach((contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    const section = groupedContacts.find((group) => group.title === firstLetter);

    if (section) {
      section.data.push(contact);
    } else {
      groupedContacts.push({ title: firstLetter, data: [contact] });
    }
  });

  // Ordenamos las secciones por las letras y los contactos dentro de cada sección
  groupedContacts.sort((a, b) => a.title.localeCompare(b.title));
  groupedContacts.forEach((section) => {
    section.data.sort((a, b) => a.name.localeCompare(b.name));
  });

  return groupedContacts;
};

const ContactList = ({ contacts, onSelectContact }: ContactListProps) => {
  // Agrupar los contactos por letra
  const sections = groupContactsByLetter(contacts);

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectContact(item)}>
          <View style={styles.contactItem}>
            {item.photo && (
              <Image source={{ uri: item.photo }} style={styles.contactPhoto} />
            )}
            <View style={styles.contactDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.text}>{item.name}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.text}>{item.phone}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.text}>{item.email}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contactItem: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#2E84B2',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactPhoto: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginRight: 16,
  },
  contactDetails: {
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    color: '#C6DB0A',
  },
  sectionHeader: {
    backgroundColor: '#1E5A82',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ContactList;
