import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from "@react-native-community/geolocation";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Location } from "../interfaces/Map.interface";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";

const useMapLogic = () => {
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const defaultLocation: Location = { latitude: 6.219686, longitude: -75.583280 };

  const requestLocationPermission = useCallback(async () => {
    try {
      const permissionType = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      const status = await check(permissionType);
      if (status === RESULTS.GRANTED) {
        fetchCurrentLocation();
      } else {
        const granted = await request(permissionType);
        if (granted === RESULTS.GRANTED) {
          fetchCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to display your current location on the map.'
          );
          setOrigin(defaultLocation);
          setLoading(false);
        }
      }
    } catch (err) {
      console.warn(err);
      setOrigin(defaultLocation);
      setLoading(false);
    }
  }, [defaultLocation]);

  const fetchCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;
        const currentLocation: Location = { latitude, longitude };
        setOrigin(currentLocation);
        await saveLocationToStorage('currentLocation', currentLocation);
        setLoading(false);
      },
      error => {
        Alert.alert(
          'Error',
          `File to retrieve your location: ${error.message}. Make sure your location is enabled.`
        );
        setOrigin(defaultLocation);
        setLoading(false);
      }
    );
  }, [defaultLocation]);

  const saveLocationToStorage = useCallback(async (key: string, location: Location) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(location));
    } catch (error) {
      console.error(`Error saving ${key} to AsyncStorage:`, error);
    }
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  const handleMapPress = useCallback((event: any) => {
    const { coordinate } = event.nativeEvent;
    setDestination(coordinate);
    saveLocationToStorage('destinationLocation', coordinate);
  }, [saveLocationToStorage]);

  return {
    origin,
    destination,
    setOrigin,
    handleMapPress,
    loading,
  };
}

export default useMapLogic;