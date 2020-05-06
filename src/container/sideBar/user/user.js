import React from 'react'
import  user from   "./user.json"
import userPng from "../../../users/1034.jpg";
import "./user.css"




const User = () => {
  console.log(user,"userrrrrr")
  return (
       <div className="user"  >
          <h4>سامانه تست برنامه نویسان</h4>
          <img  src={userPng}  alt="user" /> 
             <p>{user.role}</p>
        </div>
      
         
  )
}

export default User
