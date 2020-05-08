import React, { useContext, useState } from 'react';
import { MapContext } from "../../context/map/mapContext"
 import ReactMapGL , {Marker} from 'react-map-gl';
import map from '../../assets/images/2019-12-11_15-27-54.png';
import {GoogleApiWrapper} from 'google-maps-react';

import 'mapbox-gl/dist/mapbox-gl.css';

const Map = (props) => {
  console.log("props.detailsUser.coords", props.detailsUser)
  const contextLocation = useContext(MapContext)
  const detailsUserList = Object.values(contextLocation)
  console.log(detailsUserList, "contextLocation")

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: 400,
    latitude:  35.69439,
    longitude: 51.42151,
    zoom:10

  })
 



  return (
    <div className="map"  >
      <ReactMapGL
        {...viewPort}
        onViewportChange={(viewport) => setViewPort(viewport)}
        mapboxApiAccessToken='pk.eyJ1Ijoic2ltaW5lZnQiLCJhIjoiY2s5eTdwZXkwMDY5NTNudDc0czhrcGNxMyJ9.4TrcTcWwA9CO84bVud-uwA'
        mapStyle="mapbox://styles/simineft/ck9y84whi0j521iphh4jmtoc6"
      > 





      </ReactMapGL>

    

    </div>
  )
}



export default Map

