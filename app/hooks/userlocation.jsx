
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
const userlocation = () => {
    const[errorMsg,setErrorMsg]=useState("");
    const[latitude,setLatitude]=useState("");
    const[longtitude,setLongtitude]=useState("");

    const getUserLocation = async()=>{
        let {status} = await Location.requestForeGroundPermissionsAsync();

        if (status !== "granted") {
            setErrorMsg("Permission to location was not Granted");
            return;
        }

        let {coords} = await Location.getCurrentPositionAsync();

       if (coords) {
        const {latitude,longtitude} = coords;
        console.log("lat and log is",latitude,longtitude);
        setLatitude(latitude);
        setLongtitude(longtitude);
        let response =await Location.reverseGeocodeAsync({
            latitude,
            longtitude,

        });
        console.log("USER LOCATION IS",response);
       }
      };

      useEffect(()=>{
        getUserLocation();
      },[])
  return {latitude,longtitude,errorMsg}
}

export default userlocation