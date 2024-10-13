import React from 'react';
import './NavigationField.css';  // Import file CSS tùy chỉnh

const NavigationField = () => {
  return (
    <div className="nav-field d-flex flex-column align-items-center p-4">
      <button className="brand-name">BONDIFY</button>
      <div className="nav-buttons d-flex flex-column justify-content-center align-items-start w-100">
        <button className="nav-item active">
          <img src="https://static-00.iconduck.com/assets.00/home-icon-2048x1951-2wkyg5fe.png" alt="home" className="icon"/>
          <span>Home</span>
        </button>
        <button className="nav-item active">
          <img src="https://static-00.iconduck.com/assets.00/message-icon-2043x2048-td4t8czk.png" alt="home" className="icon"/>
          <span>Messages</span>
        </button>
        <button className="nav-item active">
          <img src="https://www.svgrepo.com/show/31480/notification-bell.svg" alt="home" className="icon"/>
          <span>Notifications</span>
        </button>
        <button className="nav-item active">
          <img src="https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png" alt="home" className="icon"/>
          <span>Profile</span>
        </button>
        <button className="nav-item active">
          <img src="https://cdn-icons-png.flaticon.com/512/929/929872.png" alt="home" className="icon"/>
          <span>Settings</span>
        </button>
      </div>
      <button className="btn-premium">BUY PREMIUM</button>
    </div>
  );
}

export default NavigationField;
