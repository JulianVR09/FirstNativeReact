import React, { useCallback } from 'react';
import { Button, Alert, View } from 'react-native';
import { launchCamera, CameraOptions, CameraType } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const CameraScreen = () => {
  const requestCameraPermission = useCallback(async () => {
    try {
      const permissionType = PERMISSIONS.ANDROID.CAMERA; 
      const status = await check(permissionType);

      if (status === RESULTS.GRANTED) {
        openCamera();
      } else if (status === RESULTS.DENIED) {
        const newStatus = await request(permissionType);
        if (newStatus === RESULTS.GRANTED) {
          openCamera();
        } else {
          Alert.alert(
            'Permiso denegado',
            'Es necesario el acceso a la cámara para tomar fotos.'
          );
        }
      } else {
        Alert.alert(
          'Permiso bloqueado',
          'Por favor, habilita el permiso de cámara en la configuración.'
        );
      }
    } catch (error) {
      console.error('Error al solicitar permisos de cámara:', error);
    }
  }, []);

  const openCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back' as CameraType,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Usuario canceló la cámara');
      } else if (response.errorCode) {
        console.error('Error al abrir la cámara:', response.errorMessage);
      } else {
        console.log('Foto tomada:', response.assets);

      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Tomar Foto" onPress={requestCameraPermission} />
    </View>
  );
};

export default CameraScreen;
