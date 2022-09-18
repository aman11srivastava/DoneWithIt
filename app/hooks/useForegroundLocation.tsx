import { useEffect, useState } from "react";
import * as Location from 'expo-location';

export interface LocationState {
    latitude: number | undefined
    longitude: number | undefined
}

const useForegroundLocation = (): LocationState => {

    const [location, setLocation] = useState<LocationState>({latitude: undefined, longitude: undefined});

    const requestLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted) return;
            const result = await Location.getLastKnownPositionAsync();
            setLocation({latitude: result?.coords.latitude, longitude: result?.coords.longitude});
        } catch (error) {
            console.log("Error => ", error);
        }
    }

    useEffect(() => {
        requestLocation();
    }, [])

    return location;
}

export default useForegroundLocation;