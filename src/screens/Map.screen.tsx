import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useMapLogic from "../hooks/MapHook";

const MapScreen = () => {
    const {
        origin,
        destination,
        handleMapPress,
    } = useMapLogic();

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin?.latitude || 6.219686,
                    longitude: origin?.longitude || -75.583280,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
                onPress={handleMapPress} 
            >
                {origin && (
                    <Marker
                        coordinate={origin}
                        title="Mi Ubicación"
                        description="Aquí estoy!"
                    />
                )}
                {destination && (
                    <Marker
                        coordinate={destination}
                        title="Destino"
                        description="Ubicación seleccionada"
                        pinColor="blue"
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: 250,
        height: 250,
    },
});

export default MapScreen;