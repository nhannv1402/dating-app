import React from 'react';
import './SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar() {
  return (
    <div className="sidebar-container">
      {/* Top Banner */}
      <div className="banner">
        15 people have liked your profile
      </div>

      {/* Notifications Section */}
      <div className="section">
        <div className="section-title">Notifications</div>
        <div className="list-group">
          <div className="list-group-item">
            <img src="https://detuoivinhloc.net/wp-content/uploads/2024/05/anh-doremon.jpg" alt="" className="avatar"/>
            <div className="notification-text">Son has sent you a gift</div>
          </div>
          <div className="list-group-item">
            <img src="https://detuoivinhloc.net/wp-content/uploads/2024/05/anh-doremon.jpg" alt="" className="avatar"/>
            <div className="notification-text">Minh has liked your profile</div>
          </div>
          <div className="list-group-item">
            <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/171885/Originals/Nobita-Background-Photos.jpg " alt="" className="avatar"/>
            <div className="notification-text">Longest text possible made</div>
          </div>
          <div className="list-group-item">
            <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/171885/Originals/Nobita-Background-Photos.jpg " alt="" className="avatar"/>
            <div className="notification-text">Longest text possible made</div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="section">
        <div className="section-header">
          <div className="section-title"> 
          <div >Contacts</div>
          <button className="refresh-button"></button>
          </div>
  
        </div>
        <div className="list-group">
          <div className="list-group-item">
            <img src="https://voz.vn/attachments/1632043092045-png.772916/ " alt="" className="avatar"/>
            <div className="notification-text">Lee Chuong</div>
          </div>
          <div className="list-group-item">
            <img src="https://voz.vn/attachments/1632043092045-png.772916/ " alt="" className="avatar"/>
            <div className="notification-text">Longest text possible made</div>
          </div>
          <div className="list-group-item">
            <img src="https://voz.vn/attachments/1632043092045-png.772916/ " alt="" className="avatar"/>
            <div className="notification-text">Longest text possible made</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
