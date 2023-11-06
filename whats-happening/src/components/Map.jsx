import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


  
  const center = {
    lat: 33.2075,
    lng: -97.1526
  };
  
  


function MyMap(location){
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: '/API KEY GOES HERE'
    })

    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map){

    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)
