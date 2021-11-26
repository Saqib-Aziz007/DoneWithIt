import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
  const [location, setLocation] = useState();
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  return location;
};

export default useLocation;
