import React, { useState } from 'react'

import { GoogleMap, useJsApiLoader,  } from '@react-google-maps/api';


//const google = window.google = window.google ? window.google : {}

const center = {
  lat: 33.211996,
  lng: -97.149138
};




function Maps(){
const { isLoaded }  = useJsApiLoader({
  id: 'google-map-script',
  //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  googleMapsApiKey: 'AIzaSyCberKoelaE5uWHmTgo_lxNlMXvU92BrhE',
  libraries: ['places']
})

const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    //const Place = new google.maps.places.PlaceService(map);
  /*
    Place.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          //createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });*/
  
    setMap(null)
  }, [])


return isLoaded ? (
  
  <GoogleMap 
  center = {center}
  zoom ={15}
  mapContainerStyle={{width:'50%', height: '100%' }}
  options={{
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
  }}
  onLoad={onLoad}
  onUnmount={onUnmount}
  >
  <></>
  </GoogleMap>
  
): <></>

}

export default React.memo(Maps);

