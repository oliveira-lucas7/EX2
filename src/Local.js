import { StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location';
import React, { useEffect, useState, useRef } from "react";
import MapView, {Marker} from 'react-native-maps';

export default function Local()
{
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const mapRef = useRef();

    async function getLocation()
    {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Algo deu erro, tente novamente!');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    useEffect( () => {
        getLocation();

        Location.watchPositionAsync({
            accuracy: Location.LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, ( response ) => {
            setLocation( response );
            mapRef.current?.animateCamera({
                center: response.coords
            })
        })

    }, []);

    return(
        <View>
            { location &&
            <MapView
            ref={mapRef}
                initialRegion={{
                    latitude: location?.coords.latitude,
                    longitude: location?.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                style={styles.mapa}
            >

                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    }}
                />

            </MapView>
            }        
        </View>
    );
};


const styles = StyleSheet.create({
    mapa: {
        width: "100%",
        height: "100%",
    }
})