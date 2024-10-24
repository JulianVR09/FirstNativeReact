import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

interface HeaderProps {
  photo?: string | null;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View>
        <Image source={require('../../assets/img/metallic-3d-abstract-shiny-metal-form-7.png')} style={styles.userImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.9) / 2,
    marginBottom: 20,
    marginTop: 20
  },
});

export default Header;