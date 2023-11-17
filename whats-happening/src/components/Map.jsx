import React, { useState } from 'react'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


//const google = window.google = window.google ? window.google : {}

const center = {
  lat: 33.211996,
  lng: -97.149138
};




function Maps(location){


const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: ['places']
})


return(
  <>
  <GoogleMap 
  center = {center}
   zoom ={15}
  mapContainerStyle={{width:'50%', height: '100%' }}
  options={{
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
  }}><Marker position={center}/> center=</GoogleMap>
  </>
)

}
export default Maps;

