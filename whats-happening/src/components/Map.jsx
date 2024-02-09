import React, { useState } from 'react'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


//const google = window.google = window.google ? window.google : {}

const center = {
  lat: 33.211996,
  lng: -97.149138
};

const Maps = ({eventData}) => {

var UNT_Locations = [];

UNT_Locations.push({ 
  
    name: "Chemistry Building",
    cords:{
      lat: 33.214035,
    lng: -97.150005
    }
  });

  UNT_Locations.push({ 
  
    name: "Envronmental Education, Science & Technology Bldg",
    cords:{
    lat: 33.21420610,
    lng: -97.15128370
    }
  });
  UNT_Locations.push({ 
  
    name: "Hickory Hall",
    cords:{
    lat: 33.21423990,
    lng: -97.14791560
    }
  });
  UNT_Locations.push({ 
  
    name: "Legends Hall",
    cords:{
    lat: 33.2130888,
    lng: -97.15406330
    }
  });
  UNT_Locations.push({ 
  
    name: "Chestnut Hall",
    cords:{
    lat: 33.21219020,
    lng: -97.15253680
    }
  });
  UNT_Locations.push({ 
  
    name: "McConnell Hall",
    cords: {
    lat: 33.21232800,
    lng: -97.15146130
  }
  });
  UNT_Locations.push({ 
  
    name: "Bruce Hall",
    cords:{
    lat: 33.21204860,
    lng: -97.15006850
    }
  });
  UNT_Locations.push({ 
  
    name: "Life Sciences Complex",
    cords: {
    lat: 33.21219650,
    lng: -97.14902030
  }
  });
  UNT_Locations.push({ 
  
    name: "Sycamore Hall",
    cords: {
    lat: 33.21210760,
    lng: -97.14792110
    }
  });
  UNT_Locations.push({ 
  
    name: "Sage Hall",
    cords:{
    lat: 33.21210030,
    lng: -97.14673370
    }
  });
  UNT_Locations.push({ 
  
    name: "Radio,TV, Film & Performing Arts",
    cords:{
    lat: 33.21207960,
    lng: -97.14569020
    }
  });
  UNT_Locations.push({ 
  
    name: "Art",
    cords:{
    lat: 33.21310250,
    lng: -97.14559150
    }
  });
  UNT_Locations.push({ 
  
    name: "Language ",
    cords:{
    lat: 33.21403960,
    lng: -97.1466477
    }
  });
  UNT_Locations.push({ 
  
    name: "Auditorium",
    cords:{
    lat: 33.21395470,
    lng: -97.14728830
    }
  })
  UNT_Locations.push({ 
  
    name: "Physics",
    cords: {
    lat: 33.21308860,
    lng: -97.14661730
    }
  })
  UNT_Locations.push({ 
  
    name: "Terrill",
    cords:{
    lat: 33.21319060,
    lng: -97.14956620
    }
  })
  UNT_Locations.push({ 
  
    name: "Marquis Hall",
    cords: {
    lat: 33.21318900,
    lng: -97.14894240
    }
  })
  UNT_Locations.push({ 
  
    name: "UNT Speech & Hearing Center",
    cords: {
    lat: 33.21222360,
    lng: -97.14199300
    }
  })
  UNT_Locations.push({ 
  
    name: "Dance and Theatre",
    cords: {
    lat: 33.21210300,
    lng: -97.14167880
    }
  })
  UNT_Locations.push({ 
  
    name: "Union",
    cords: {
    lat: 33.21090600,
    lng: -97.14735000
    }
  })
  UNT_Locations.push({ 
  
    name: "Eagle Student Services Center",
    cords: {
    lat: 33.21033450,
    lng: -97.14797310
    }
  })
  UNT_Locations.push({ 
  
    name: "Willis Library",
    cords: {
    lat: 33.21011960,
    lng: -97.14898730
    }

  })
  UNT_Locations.push({ 
  
    name: "Music",
    cords: {
    lat: 33.21065670,
    lng: -97.15008630
    }
  })
  UNT_Locations.push({ 
  
    name: "Chilton Hall",
    cords:{
    lat: 33.21103530,
    lng: -97.15133350
    }
  })
  UNT_Locations.push({ 
  
    name: "Physical Education Building",
    cords: {
    lat: 33.21090800,
    lng: -97.15296730
    }

  })
  UNT_Locations.push({ 
  
    name: "Apogee Stadium",
    cords:{
    lat: 33.20418430,
    lng: -97.15919110
    }
  })
  UNT_Locations.push({ 
  
    name: "Discovery Park Building",
    cords: {
    lat: 33.25403520,
    lng: -97.15280940
   }
  })



  
const { isLoaded }  = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: '',
  libraries: ['places']
})

/*const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {


    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
 
    setMap(map)
  }, [])*/

 


return isLoaded ? (
  
  <GoogleMap 
  center = {center}
  zoom ={16}
  mapContainerStyle={{width:'50%', height: '100%' }}
  options={{
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
  }}
  //onLoad={onLoad}
  //onUnmount={onUnmount}
  >
   {
    eventData.map((event) =>{
        let name = String(event.Location);
        for(let i=0;i<UNT_Locations.length;i++)
        {
          if(name.includes(UNT_Locations[i].name))
          {
            return(<Marker position={UNT_Locations[i].cords}></Marker>)
          }
        }
    })
   }
  <></>
  </GoogleMap>
): <></>

}

export default React.memo(Maps);
