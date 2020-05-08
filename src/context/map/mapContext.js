import React,{useState} from 'react';
import detailsJson3966 from '../../components/userlist/detail/3966.json';
import detailsJson3967 from '../../components/userlist/detail/3967.json';
import detailsJson3968 from '../../components/userlist/detail/3968.json';
import detailsJson3969 from '../../components/userlist/detail/3969.json';
import detailsJson3970  from '../../components/userlist/detail/3970.json'

export const MapContext = React.createContext([])



const coords3966= detailsJson3966
const coords3967= detailsJson3967
const coords3968= detailsJson3968
const coords3969= detailsJson3969
const coords3970= detailsJson3970

const MapContextProvider = (props) => {
  const [selectedUserId, setSelectedUserId] = useState(0)
    return(
      <MapContext.Provider
         value={{ 
           setSelectedUserId,
           selectedUserId,
           details: {
            coords3966,
            coords3967,
            coords3968,
            coords3969,
            coords3970
           } }} >
         {props.children}
      </MapContext.Provider>
    )

}


export default MapContextProvider