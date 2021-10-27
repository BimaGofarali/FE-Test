import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar, Nav, Col, Row, Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import berenang from './Image/berenang.jpg';
import camping from './Image/camping.jpg';
import watchmovie from './Image/watchmovie.jpg';
import html from './Image/html.png';
import css from './Image/css.jpg';
import javascript from './Image/js.jpg'
import fotoprofile from './Image/_CPC6097.jpg';
import './App.css'
import Image from 'react-bootstrap/Image'


function App() {
    
  return (
    <div>
    <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">Profile</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home Page</Nav.Link>
      <Nav.Link href="#About-Me">About Me</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
  </Navbar>

  <Container>
<Container>
        <div className="Home" id="home">
      <Image src={fotoprofile} thumbnail alt="Bima Gofarali" width="200"/>
      <h1>Hello, My name is Bima</h1>
      </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,256L18.5,256C36.9,256,74,256,111,245.3C147.7,235,185,213,222,197.3C258.5,181,295,171,332,176C369.2,181,406,203,443,197.3C480,192,517,160,554,133.3C590.8,107,628,85,665,80C701.5,75,738,85,775,106.7C812.3,128,849,160,886,186.7C923.1,213,960,235,997,218.7C1033.8,203,1071,149,1108,128C1144.6,107,1182,117,1218,138.7C1255.4,160,1292,192,1329,197.3C1366.2,203,1403,181,1422,170.7L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
      <Container>
    <div className="Isian justify-content-md-center row align-items-center">
      <Row>
        <Col  className="Hobby" id="About-Me">
      <h2> About Me</h2>
      </Col>
      </Row>
  <Row >
    <Col className="AboutMe">
    <p>
          Saya sekarang tinggal di jogja, dan sedang belajar di Glints Academy,
          sudah hampir 1 bulan saya belajar sebagai front-end-developer,
          banyak yang bisa saya pelajari di bootcamp,
          sebuah kebanggaan tersendiri dapat membuat web,
          ya akhirnya saya bisa memiliki suatu hal yang dibuat sendiri.
      </p>
    <Col>
    <p>
      Setiap orang memiliki hobi,
      Hobi adalah kegiatan rekreasi yang dilakukan pada waktu luang untuk menenangkan pikiran seseorang.
      hobi bisa di gunakan untuk menikmati hidup.
    </p>

    <h2>
      My Hobby
    </h2>
      </Col>
    </Col>
</Row>

<Row>
    <div className="slider justify-content-md-center row align-items-center">
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={berenang}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Swimming</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={watchmovie}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Watching Movie</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={camping}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Camping</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
  </Row>
  </div>
  </Container>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,256L18.5,256C36.9,256,74,256,111,245.3C147.7,235,185,213,222,197.3C258.5,181,295,171,332,176C369.2,181,406,203,443,197.3C480,192,517,160,554,133.3C590.8,107,628,85,665,80C701.5,75,738,85,775,106.7C812.3,128,849,160,886,186.7C923.1,213,960,235,997,218.7C1033.8,203,1071,149,1108,128C1144.6,107,1182,117,1218,138.7C1255.4,160,1292,192,1329,197.3C1366.2,203,1403,181,1422,170.7L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>

<div claasName = "justify-content-md-center row align-items-center"> 
<Row className="Card">
<Col>
    <h2>
      Kemampuan
    </h2>
  </Col>
  </Row>

<Col className="IsiCard">
<CardGroup>
  <Card className = "mx-2 my-2">
    <Card.Img variant="top" src= {html}/>
    <Card.Body>
      <Card.Title> <a href="https://www.youtube.com/watch?v=W-6OY9eI3hk" target="blank">HTML</a></Card.Title>
      <Card.Text>
      adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className = "mx-2 my-2">
    <Card.Img variant="top" src= {css} />
    <Card.Body>
      <Card.Title><a href="https://www.youtube.com/watch?v=1PnVor36_40" target="blank">CSS</a></Card.Title>.
      <Card.Text>
      merupakan bahasa pemrograman yang menjadikan website Anda lebih hidup dan menarik.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className = "mx-2 my-2">
    <Card.Img variant="top" src= {javascript} />
    <Card.Body>
      <Card.Title><a href="https://www.youtube.com/watch?v=upDLs1sn7g4" target="blank">Javascript</a></Card.Title>
      <Card.Text>
      merupakan bahasa pemrograman yang menjadikan website Anda lebih hidup dan menarik.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</Col>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,256L18.5,256C36.9,256,74,256,111,245.3C147.7,235,185,213,222,197.3C258.5,181,295,171,332,176C369.2,181,406,203,443,197.3C480,192,517,160,554,133.3C590.8,107,628,85,665,80C701.5,75,738,85,775,106.7C812.3,128,849,160,886,186.7C923.1,213,960,235,997,218.7C1033.8,203,1071,149,1108,128C1144.6,107,1182,117,1218,138.7C1255.4,160,1292,192,1329,197.3C1366.2,203,1403,181,1422,170.7L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>


<div id="Contact" className="contac">
<Form>
    <Row>
    <h2>
      Contac Me
    </h2>
    </Row>
  <Col>
    <Form.Group
    className="mb-3 px-5"
    controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group
     className="mb-3 px-5"
     controlId="exampleForm.ControlTextarea1">
    <Form.Label>Input Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Col>
    <Button className="px-5" variant="primary" type="submit">Submit</Button>
 </Form>
 </div>
 </Container>

 <div className="Footer">
  <h6>
    create by <a href='https://www.instagram.com/bimagofaralirobi/'>Bima Gofarali</a>
  </h6>
</div>

 </div>
  );
}

export default App;
