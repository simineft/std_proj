import React from 'react'
import { Menu } from 'antd';
import menuData from "./menu.json";
import 'antd/dist/antd.css';
import "./menu.css"

const { SubMenu } = Menu;



const menus = menuData.menu
console.log(menus, "menu")

const MenuSidebar = () => {

  return (

    <div className="menuSide" >
      <Menu
        style={{ backgroundColor: "#E0E0E0", height: '100vh' }}
        defaultOpenKeys={menus.map(menu => menu.id.toString())}
        mode="inline"
      >

        {menus.map((menu, index) => {
          return (
            <SubMenu
              key={menu.id}
              title={
                <span>{menu.name}</span>

              }
            >
              <Menu.ItemGroup >
                {menu.subMenu.map(submenu => {
                  return (
                    <Menu.Item key={submenu.id} >{submenu.name}</Menu.Item>
                  )
                })}
              </Menu.ItemGroup>
            </SubMenu>
          )

        })}
      </Menu>


  


    </div>

  )
}

export default MenuSidebar

