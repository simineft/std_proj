
import React, { useContext, useState } from 'react';
import { MapContext } from "../../context/map/mapContext"
import ReactMapGL, { Marker } from 'react-map-gl';
import marker from "../../assets/images/empty.svg"




const Mapp = () => {
  const { selectedUserId, details } = useContext(MapContext)

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: 400,
    zoom:20

  })

  const temp = Object.values(details)
  const userdetails = temp.find(d => d.id === selectedUserId);
  if (!userdetails) {
    return null;
  }
  const vp = {
    ...viewPort,
    latitude: userdetails.coords[0].lat,
    longitude: userdetails.coords[0].lng
  };
  return (

    <ReactMapGL
      {
      ...vp
      }
      onViewportChange={(viewport) => setViewPort(viewport)}
      mapboxApiAccessToken='pk.eyJ1Ijoic2ltaW5lZnQiLCJhIjoiY2s5eTdwZXkwMDY5NTNudDc0czhrcGNxMyJ9.4TrcTcWwA9CO84bVud-uwA'
      mapStyle="mapbox://styles/simineft/ck9y84whi0j521iphh4jmtoc6"
    >
      {
        userdetails ?
          userdetails.coords.map(coord => (
            <Marker
              longitude={coord.lng}
              latitude={coord.lat}
              draggable>
              {/* <div>👋</div> */}
              <div>
                <img  src={marker} alt="marker" style={{width:"10px" , height:"10px"  ,backgroundColor:'#4CA9CB'}}    />
                </div>
            </Marker>
          )) : null
      }
    </ReactMapGL>




  )
}



export default Mapp