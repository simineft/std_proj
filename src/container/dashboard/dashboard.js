import React from 'react'
import { Layout, Menu } from 'antd';
import ContentDashboard from "../content/content";
import SideBar from "../sideBar/sideBar";
import MenuSidebar from "../../components/menu/menu"
import 'antd/dist/antd.css';
import "./dashboard.css"




const {  Content, Sider } = Layout;



const  Dashboard=() => {
    return (
      <div>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              right: 0,
            }}
            className="site-layout-background" 
          >
            <SideBar />
          </Sider>
          <Layout className="site-layout" style={{ marginRight: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

              <ContentDashboard />
            </Content>

          </Layout>
        </Layout> 
      </div>
    )
  
}


export default Dashboard

