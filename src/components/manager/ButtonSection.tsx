import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Contact } from '../../interfaces/Contact.interface';
import CustomButtonModal from '../ButtonModal';

interface ButtonSectionProps {
  contact: Contact | null;
  saveContact: () => void;
  onClose: () => void;
  openDeleteModal: () => void;
}

const ButtonSection: React.FC<ButtonSectionProps> = ({
  contact,
  saveContact,
  onClose,
  openDeleteModal,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <CustomButtonModal
          onPress={saveContact}
          text={contact ? 'Save Changes' : 'Add Contact'}
        />
        <CustomButtonModal onPress={onClose} text="Close" width={130} />
      </View>
      {contact && (
        <View style={styles.deleteContainer}>
          <CustomButtonModal
            onPress={openDeleteModal}
            text="Delete contact"
            width={200}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginVertical: 10,
  },
  deleteContainer: {
    marginTop: 10,
  },
});

export default ButtonSection;