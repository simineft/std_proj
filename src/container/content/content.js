import React from 'react';
import MenuSidebar from "../../components/menu/menu"
import lgopic from "../../assets/images/polina-rytova-1dGMs4hhcVA-unsplash.png"
import iconfiner from "../../assets/images/iconfinder_Paul-17_2624626.png";
import map from '../../assets/images/2019-12-11_15-27-54.png';
import iconfinder29 from '../../assets/images/iconfinder_ui_29_5344423.png';
import iconfinderDolar from '../../assets/images/iconfinder_277_Dollar_money_user_idea_3990082.png';
import iconfinderui from '../../assets/images/iconfinder_ui_21_5344418.png';
import iconfinderBusiness from '../../assets/images/iconfinder_business-card_216117.png';
import iconfinderFinance from '../../assets/images/iconfinder_business_finance_money-04_2784287.png';
import iconfinderOffice from '../../assets//images/iconfinder_office-22_809605.png'
import "./content.css";

const  ContentDashboard =()=> {
    return (
      <div className="dashboardContent">

        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <MenuSidebar />
          <div className="content"   >
            <div className="row1"  >
              <div className="user_back"  >
                <img src={lgopic} alt="" />
                <img src={iconfiner} alt="" className="icon_finder" />
                <p>عرفان میهنی</p>
                <div className="region"  >
                  <div className="info_detail" >
                    <h5>کانال:</h5>
                    <p style={{ backgroundColor: "#ECD9EB" }}  >
                      Rc-2-2
                    </p>
                  </div>
                  <div className="info_detail">دریچه :
                       <p style={{ backgroundColor: "#ECD9EB" }}> Rc-234 </p>
                  </div>
                  <div className="info_detail"> ظرفیت :
                       <p style={{ backgroundColor: "#ECD9EB" }} >22.34</p>
                  </div>
                  <div className="info_detail"> منطقه :
                    <p style={{ backgroundColor: "#ECD9EB" }} >L-137</p>
                  </div>
                </div>
              </div>
              <div style={{ width: '50%' }}  >
                <div className="details" >
                  <div className="part" style={{ backgroundColor: "#EAAD1E" }} >
                    <img src={iconfinder29} alt="iconfinder29" />
                    <p>برنامه کارشناسی</p>

                  </div>
                  <div className="part" style={{ backgroundColor: "#F6F4F4" }}  >
                    <img src={iconfinderDolar} alt="iconfinderDolar" />
                    <p>عملیات</p>

                  </div>
                </div>
                <div className="details"  >
                  <div className="part" style={{ backgroundColor: "#F6F4F4" }}    >
                    <img src={iconfinderui} alt="iconfinderui" />
                    <p>برنامه بهینه</p>

                  </div>
                  <div className="part" style={{ backgroundColor: "#F6F4F4" }}   >
                    <img src={iconfinderBusiness} alt="iconfinderBusiness" />
                    <p>منابع آبی</p>

                  </div>
                </div>

                <div className="details"  >
                  <div className="part" style={{ backgroundColor: "#F6F4F4" }}    >
                    <img src={iconfinderFinance} alt="iconfinderFinance" />
                    <p>نیاز آبی</p>

                  </div>
                  <div className="part" style={{ backgroundColor: "#F6F4F4" }}    >
                    <img src={iconfinderOffice} alt="iconfinderOffice" />
                    <p>داده ها و ستاد</p>
                  </div>
                </div>

              </div>

            </div>


            <div className="box_information">
              <div className="box_info_user" >
                <h2>اطلاعات کاربر</h2>
                <p>مساحت سطح کشت</p>
                <p>روستای زیرمجموعه</p>
              </div>
              <div className="box_infoـplants" >
                <p>گیاهان سطح</p>
              </div>
              <div className="box_infoـwatering" >
                <p>اطلاعات آبیاری</p>
              </div>
              <div className="box_infoـWells">
                <p>اطلاعات چاه ها</p>
              </div>
            </div>

            <div className="map"  >
              <img src={map} alt="map" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default   ContentDashboard
