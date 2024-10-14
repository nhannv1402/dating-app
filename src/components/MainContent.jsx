import React, { useState } from 'react';
import { useSpring, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import './MainContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MainContent() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Jung-Hae-In",
      image: "https://jabarekspres.com/wp-content/uploads/2023/09/jung-haein.jpeg",
      details: [
        "Hi, my name is Jung-Hae-In, I'm a famous actor in Japan.",
        "I can sing, dance, play music, and bring you happiness.",
        "No FWB, ONS, GWTF. Thank you!"
      ],
      mainImage: "https://cdn.tatlerasia.com/tatlerasia/i/2021/12/27160400-jung-hae-in-snowdrop_cover_1240x829.jpeg",
    },
    {
      id: 2,
      name: "G-Dragon",
      image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/18/1381365/G-Dragon-Instagram-1-01.jpg",
      details: [
        "Konichiwa, My name is GD - 30 years old",
        "Bang Bang Báng Bén à Bén à Bén à",
        "Tam mô ja ma đá tam mô ja quà"
      ],
      mainImage: "https://favim.com/pd/p/orig/2019/03/19/jiyong-gd-kwon-jiyong-Favim.com-7015942.jpg",
    },
    {
      id: 3,
      name: "Bray",
      image: "https://image.plo.vn/w1000/Uploaded/2024/atymt/2024_01_04/b-ray-2-7423-8711.jpg.webp",
      details: [
        "Bray- 28 tuổi - TP HCM",
        "Đang buồn đang chán ai tán yêu luôn",
        "Trẻ tuổi dư tiền sống sướng như tiên"
      ],
      mainImage: "https://kenh14cdn.com/203336854389633024/2024/8/26/b-ray-1-172466741467325099352-1724668970073-1724668970288419936911.jpg",
    },
    {
      id: 4,
      name: "Trịnh Trần Phương Tuấn",
      image: "https://i.pinimg.com/736x/fa/fc/4b/fafc4b1052deae2438681e45ff7335a5.jpg",
      details: [
        "Rách bến tre- sinh năm 97, tuổi tự tính - Xứ sở kẹo dừa",
        "Từ nay anh mất em rồi, lặng nhìn chiếc bóng đơn côi",
        "Và ba anh là lính má anh từng là cán bộ"
      ],
      mainImage: "https://thuvienmeme.com/wp-content/uploads/2023/09/doi-cho-sach-jack-cho-thom.jpg",
    },
    {
      id: 5,
      name: "Ngoc Sonn",
      image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/448018753_1037236701744846_5841594368316806031_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHiAz8F8xWF4AUica_0c6STZMX4BmI3PSZkxfgGYjc9Jm6VuSIFh4nyNFHqg_oQ6Fx5OYtiGqews0ZHMexJt76a&_nc_ohc=b5FIMiop5LAQ7kNvgF_b2kb&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AvuUPbzoC425ty2Jg_w1BQ1&oh=00_AYAnoYzzZxIVzisiDimQwLJ3TN83JQ3zJahPnG0lRkZhXg&oe=6713653A",
      details: [
        "Ngoc Sonn- 20 tuổi chưa cắt bqđ - Fuda",
        "Chim nhỏ nhưng yêu em thật lòng",
        "Anh nhớ Lan quá Lan ơi, Em quay lại với anh nha"
      ],
      mainImage: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/448018753_1037236701744846_5841594368316806031_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHiAz8F8xWF4AUica_0c6STZMX4BmI3PSZkxfgGYjc9Jm6VuSIFh4nyNFHqg_oQ6Fx5OYtiGqews0ZHMexJt76a&_nc_ohc=b5FIMiop5LAQ7kNvgF_b2kb&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AvuUPbzoC425ty2Jg_w1BQ1&oh=00_AYAnoYzzZxIVzisiDimQwLJ3TN83JQ3zJahPnG0lRkZhXg&oe=6713653A",
    },
    {
      id: 6,
      name: "Khoi Luu",
      image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/62482122_302709997275761_5572613259313283072_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEqRXIzlkzVC7d4YjLKbpS6zO7gYrIoZRnM7uBisihlGZN48CmldkcK6voWub3oXlyjn0bonl4H3nzvpfz8G7-3&_nc_ohc=sG9o3w1EIDEQ7kNvgEEteHh&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=A37WLuAWYyIQOx34gxDEDaU&oh=00_AYDI2LWCclpxt_0jYQdeJJLY15IP49wR42siet7ZEMV0jg&oe=6734FDB8",
      details: [
        "Khoi Luu- 20 tuổi chưa cắt bqđ - Fuda",
        "Chim nhỏ đéo dám xin info",
        "thằng bốn bình sữa thằng không bình nào"
      ],
      mainImage: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/36222875_134601997419896_199736393243557888_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFmoqNuFK8wpkpdmSX2Cb-tOZIIm4Zwa8A5kgibhnBrwGxotEB88wcuOED9WCdC7xZ0FDLS9PHC1OWfcmYsL87O&_nc_ohc=8BkxXq2fxlwQ7kNvgF6ZN2N&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AlyYpfB9jfld-jNKnW4aGT5&oh=00_AYA4K82rubyKTc8c2bo-9X_apsMS-G9tK737fT8s_lhcEA&oe=6734FD29",
    },
    // Thêm nhiều đối tượng partner khác tại đây
  ]);


  const [currentCardIndex, setCurrentCardIndex] = useState(0);


  const [{ x, rot, scale }, api] = useSpring(() => ({
    x: 0,
    rot: 0,
    scale: 1,
  }));


  const bind = useDrag(({ down, movement: [mx], velocity }) => {
    const trigger = velocity > 0.2; // Điều kiện để thẻ "biến mất"


    if (!down && trigger) {
      // Nếu kéo ra đủ mạnh, thẻ sẽ biến mất
      setCurrentCardIndex((prev) => prev + 1); // Tăng chỉ số lên để lấy thẻ tiếp theo
     
      // Reset giá trị của spring
      api.start({
        x: mx < 0 ? -window.innerWidth : window.innerWidth, // Di chuyển ra ngoài màn hình
        rot: 0,
        scale: 1,
        config: { tension: 300, friction: 30 },
      });
     
      // Đặt lại giá trị của x về 0 sau khi thẻ đã biến mất
      setTimeout(() => {
        api.start({
          x: 0,
          rot: 0,
          scale: 1,
          config: { tension: 300, friction: 30 },
        });
      }, 300); // Thời gian để chuyển động hoàn tất trước khi reset
    } else {
      // Cập nhật giá trị spring
      api.start({
        x: down ? mx : 0,
        rot: down ? mx / 100 : 0,
        scale: down ? 1.1 : 1,
        config: { tension: down ? 300 : 500, friction: down ? 30 : 50 },
      });
    }
  });


  // Kiểm tra xem có thẻ nào còn không
  if (currentCardIndex >= cards.length) {
    return <div className="no-more-cards">No more cards!</div>;
  }


  const { name, image, details, mainImage } = cards[currentCardIndex];


  return (
    <div className="main-content">
      {/* Phần chứa hình ảnh của các partner tiếp theo */}
      <div className="upcoming-partners">
        {/* Các hình ảnh partner khác */}
        <img src="https://houseofteeth.com/wp-content/uploads/2020/06/portrait-square-11.jpg" alt="" className="partner-image"/>
        <img src="https://www.kellyheckphotography.com/wp-content/uploads/2022/02/Amber-1705-cropped.jpg" alt="" className="partner-image"/>
        <img src="https://st.depositphotos.com/1144472/1532/i/450/depositphotos_15320783-stock-photo-portrait-of-young-woman-at.jpg" alt="" className="partner-image"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/473px-Donald_Trump_official_portrait.jpg" alt="" className="partner-image"/>
        <img src="https://i.pinimg.com/736x/9c/51/df/9c51df5a10048f0e09532e3d4446a87d.jpg" alt="" className="partner-image"/>
      </div>


      {/* Profile section với khả năng kéo thả */}
      <animated.div
        className="profile-section"
        {...bind()} // Kết nối gesture với profile-section
        style={{
          transform: interpolate([x, rot, scale], (x, r, s) => `translate3d(${x}px, 0, 0) rotate(${r}deg) scale(${s})`),
          position: 'relative', // Để cho phép di chuyển
          willChange: 'transform', // Giúp cải thiện hiệu suất
        }}
      >
        <div className="profile-picture-and-detail">
          <img className="profile-picture" src={image} alt="profile-picture" />
          <div className="profile-details">
            {details.map((detail, index) => (
              <div className="detail-line" key={index}>{detail}</div>
            ))}
          </div>
        </div>
       
        <hr className="divider" />


        {/* Image section */}
        <div className="image-section">
          <img className="main-image" src={mainImage} alt="" />
        </div>
      </animated.div>


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
