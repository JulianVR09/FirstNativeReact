import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  width?: number;
}

const CustomButtonModal: React.FC<CustomButtonProps> = ({ onPress, text, width }) => {
  return (
    <TouchableOpacity style={[styles.button, { width }]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C6DB0A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    padding: 15,
  },
  buttonText: {
    color: '#2E84B2',
    fontWeight: 'thin',
    fontSize: 15,
  },
});

export default CustomButtonModal;