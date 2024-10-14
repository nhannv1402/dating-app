import React from 'react';
import NavigationField from './components/NavigationField';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import Advanced from './components/Advanced';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';  // Import các thành phần từ react-bootstrap


function App() {
  return (
  //   <div className="app-container ">
  //     <NavigationField />
  //     <MainContent />
  //     <SideBar />
  //   </div>
  // );

  // <Container className="app-container">

  //     <Row>
  //       <Col>
  //       <NavigationField />
  //       </Col>
  //       <Col xs={6}>
  //       <MainContent />
  //       </Col>
  //       <Col>
  //       <SideBar />
  //       </Col>
  //     </Row>
      
  //   </Container>  
  <Container fluid className="app-container"> {/* Sử dụng 'fluid' để container chiếm toàn bộ màn hình */}

      <Row className="row-container" style={{ flex: 1 }}> {/* Flex: 1 để nội dung chiếm hết chiều cao màn hình */}
        <Col xs={2} className="custom"> {/* Sidebar chiếm 2 phần trong 12 phần của màn hình */}
          <NavigationField />
        </Col>
        <Col xs={8} className="custom" > {/* MainContent chiếm 8 phần */}
          <Advanced />
        </Col>
        <Col xs={2} className="custom"> {/* Có thể thêm phần sidebar nếu cần, hoặc để cân bằng */}
          <SideBar />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
