import React, { useState } from 'react';
import detailsJson3966 from '../../components/userlist/detail/3966.json';
import detailsJson3967 from '../../components/userlist/detail/3967.json';
import detailsJson3968 from '../../components/userlist/detail/3968.json';
import detailsJson3969 from '../../components/userlist/detail/3969.json';
import detailsJson3970  from '../../components/userlist/detail/3970.json'
import data from "./json001.json";
import imgUser from "../../assets/images/iconfinder_misc-_user_-1.png"
import "./userlist.css";




const users = data.all.children
const userList = Object.values(users) 

const UserList = () => {
   console.log("userlist",userList)
   console.log (detailsJson3966.coords, "detailsJson3966")
   console.log (detailsJson3967, "detailsJson3967")
   console.log (detailsJson3968, "detailsJson3968")
   console.log (detailsJson3969, "detailsJson3969")
   console.log (detailsJson3970, "detailsJson3970")
   
 
   const showDetailsCorrdinate=()=>{
    return(
     detailsJson3966.coords.map(map=>{
       return (
         map.lat +  " " + map.lng
         
      
       )
     })
    )
     
 
   }
 

  const [selectedIndex, setselectedIndex] = useState(0)

  const showUserHandler=(user,index)=>{
    setselectedIndex(index);
  }
 

  const showList = userList.map((user,index) => {
    if(index === selectedIndex){
      return (
        <div className="showList" style={{backgroundColor:"#4CA9CB"}} onClick={()=>showUserHandler(user,index)} key={user.id}  >
          <img src={imgUser} alt="" />
          <div  className="userinfo" >
            <span >{user.id}</span>
            <p >{user.name}</p>
          </div>
       
          <span className="childrenCount"   style={{backgroundColor:user.is_polygon?"green":"#336699"}}    >{user.children_count}</span>
        </div>
  
      )
    }else{
      return (
        <div className="showList"  onClick={()=>showUserHandler(user,index)}>
          <img src={imgUser} alt="" />
          <div  className="userinfo" >
            <span >{user.id}</span>
             <p >{user.name}</p>
          </div>
         
          <span  className="childrenCount"   style={{backgroundColor:user.is_polygon?"green":"#336699"}}  >{user.children_count}</span>
          
        </div>
  
      )

    }
    
  })


 



  return (
    <div className="userList"  >
        {showList}
   
     
    </div>
  )
}

export default UserList
