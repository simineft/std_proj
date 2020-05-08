import React, { useContext } from 'react';
import { MapContext } from "../../context/map/mapContext"
import map from '../../assets/images/2019-12-11_15-27-54.png';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Mapp = (props) => {
  console.log("props.detailsUser.coords", props.detailsUser)
  const contextLocation = useContext(MapContext)
  const detailsUserList = Object.values(contextLocation)
  console.log(detailsUserList, "contextLocation")











  

  // const markerShow = () => {
  //   console.log("mfvfmvfvf")
  //   const pppppp = detailsUserList.map(user => {
  //     return (
  //       user.coords
  //     )
  //   })
  //   console.log(pppppp, "pppppp")
  //   const tttt = pppppp.map((item,index) => {
  //     return (
  //       item[index]
  //     )

  //   })
  //   //npm install --save google-maps-react
  //   console.log(tttt, "tttt")



  // }
  return (
    <Map google={props.google} zoom={14}>
 
    <Marker 
            name={'Current location'} />

    <InfoWindow>
        <div>
          <h1>"njnjnj"</h1>
        </div>
    </InfoWindow>
       
  </Map>
  )
}

export default Mapp
