import React, { useState, useContext } from 'react';
import { MapContext } from "../../context/map/mapContext"
import imgUser from "../../assets/images/iconfinder_misc-_user_-1.png";
import data from "./json001.json";
import "./userlist.css";




const users = data.all.children
const userList = Object.values(users)

const UserList = () => {
  const { setSelectedUserId } = useContext(MapContext)

  const [selectedIndex, setselectedIndex] = useState(0)

  const showUserHandler = (user, index) => {
    setSelectedUserId(user.id);
    setselectedIndex(index);
    // const findUser= detailsUserList.find(item=>item.id=== user.id)
    //  c cbv findUserCoordinate =findUser
    // console.log(findUserCoordinate,"findUserCoordinate")

  }


  const showList = userList.map((user, index) => {
    if (index === selectedIndex) {
      return (
        <div className="showList_effect" style={{ backgroundColor: "#4CA9CB" }} onClick={() => showUserHandler(user, index)} key={user.id}  >
          <img src={imgUser} alt="" />
          <div className="userinfo" >
            <span >{user.id}</span>
            <p >{user.name}</p>
          </div>
          <span className="childrenCount" style={{ backgroundColor: user.is_polygon ? "green" : "#336699" }}    >{user.children_count}</span>
        </div>

      )
    } else {
      return (
        <div className="showList" onClick={() => showUserHandler(user, index)}>
          <img src={imgUser} alt="" />
          <div className="userinfo" >
            <span >{user.id}</span>
            <p >{user.name}</p>
          </div>

          <span className="childrenCount" style={{ backgroundColor: user.is_polygon ? "green" : "#336699" }}  >{user.children_count}</span>

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
