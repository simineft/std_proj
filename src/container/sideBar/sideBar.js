import React from 'react';
import UserList from "../../components/userlist/userlist";
import User from "../../container/sideBar/user/user";
import 'antd/dist/antd.css';
import "./sideBar.css";




const  SideBar= () =>{
    return (
      <div  className="sidBar" >
        <User/>
        <UserList/>
      </div>
    )
  
}

export default  SideBar
