import React from 'react';
import './MainContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent() {
  return (
    <div className="main-content">

       {/* Phần chứa hình ảnh của các partner tiếp theo */}
      <div className="upcoming-partners">
        <img src="https://houseofteeth.com/wp-content/uploads/2020/06/portrait-square-11.jpg" alt="" className="partner-image"/>
        <img src="https://www.kellyheckphotography.com/wp-content/uploads/2022/02/Amber-1705-cropped.jpg" alt="" className="partner-image"/>
        <img src="https://st.depositphotos.com/1144472/1532/i/450/depositphotos_15320783-stock-photo-portrait-of-young-woman-at.jpg" alt="" className="partner-image"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/473px-Donald_Trump_official_portrait.jpg" alt="" className="partner-image"/>
        <img src="https://i.pinimg.com/736x/9c/51/df/9c51df5a10048f0e09532e3d4446a87d.jpg" alt="" className="partner-image"/>
      </div>

      {/* Profile section */}
      <div className="profile-section">
        <div className="profile-picture-and-detail">


        <img className="profile-picture" src="https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg" alt="profile-picture" />

        <div className="profile-details">
          <div className="detail-line">Hi, my name is Jung-Hae-In, I'm a famous actor in Janpan.</div>
          <div className="detail-line">I could to sing, dance, playing music and bring you happiness</div>
          <div className="detail-line">No FWB, ONS, GWTF. Thanks you</div>
        </div>

        </div>
        

        <hr className="divider" />

      {/* Image section */}
      <div className="image-section">
        <img className="main-image" src="https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg" alt="" />
      </div>

      </div>

      

      {/* Action buttons */}
      <div className="action-buttons">
        <div className="button-group">
        <button className="action-button dislike-button"></button>
        <button className="action-button like-button"></button>
        <button className="action-button ban-button"></button>
        <button className="action-button gift-button"></button>
        <button className="action-button moreinfor-button"></button>


        </div>
      </div>
    </div>
  );
}

export default MainContent;