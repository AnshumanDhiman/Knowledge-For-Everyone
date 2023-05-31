import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css'



export default function Cards() {
  return (
    <>
    <Row xs={1} md={2} lg={3} className="g-4">
    <h1>Our Top Courses</h1>
    </Row>

    <div className="paddingCard">
    
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" />
        <Card.Body>
          <Card.Title>2023 Web Development Bootcamp</Card.Title>
          <Card.Text>
          Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps. Frontend and Backend Languages are included.
          </Card.Text>
          <Card.Text>
          Rating: 4.5 out of 5
          </Card.Text>
          <Card.Text>
          <span style={{marginTop:'10px'}}>Free</span>
          <a href="/course1"><Button variant="primary" style={{float:'Right'}}>Start Course</Button></a>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://www.infyitsolutions.com/images/python2.jpg" />
        <Card.Body>
          <Card.Title>The Complete 2023 Python Bootcamp</Card.Title>
          <Card.Text>
          Welcome to Complete Python Bootcamp for Everyone, the best and the most comprehensive Python course on the internet.
          </Card.Text>
          <Card.Text>
          Rating: 4.5 out of 5
          </Card.Text>
          <Card.Text>
          <span style={{marginTop:'10px'}}>Free</span>
          <a href="/course1"><Button variant="primary" style={{float:'Right'}}>Start Course</Button></a>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://d29xdxvhssor07.cloudfront.net/assets/schools/2410/courses/57416/c_4u14ui.png" />
        <Card.Body>
          <Card.Title>The Complete 2023 C++ Bootcamp</Card.Title>
          <Card.Text>
          C++ Programming Language is one the fasted and flexible programming languages of all time as well as one of the most widely used programming languages in the world.
          </Card.Text>
          <Card.Text>
          Rating: 4.5 out of 5
          </Card.Text>
          <Card.Text>
          <span style={{marginTop:'10px'}}>Free</span>
          <a href="/course1"><Button variant="primary" style={{float:'Right'}}>Start Course</Button></a>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://lset.uk/wp-content/uploads/2021/04/Java-bootcamp-sec-img-min.jpg" />
        <Card.Body>
          <Card.Title>The Complete 2023 Java Bootcamp</Card.Title>
          <Card.Text>
          Join us as we guide you through the essentials of Java, from basic syntax and data structures to advanced concepts like lambda expressions, inheritance, and stream operations.
          </Card.Text>
          <Card.Text>
          Rating: 4.5 out of 5
          </Card.Text>
          <Card.Text>
          <span style={{marginTop:'10px'}}>Free</span>
          <a href="/course1"><Button variant="primary" style={{float:'Right'}}>Start Course</Button></a>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://i.ytimg.com/vi/YDa1x8GTZg8/maxresdefault.jpg" />
        <Card.Body>
          <Card.Title>2023 App Development Bootcamp</Card.Title>
          <Card.Text>
          The Android Development Bootcamp is a brand new, up-to-date course providing the perfect introduction to the real-world Android concepts and skills required to be a successful Android developer in 2023.
          </Card.Text>
          <Card.Text>
          Rating: 4.5 out of 5
          </Card.Text>
          <Card.Text>
          <span style={{marginTop:'10px'}}>Free</span>
          <a href="/course1"><Button variant="primary" style={{float:'Right'}}>Start Course</Button></a>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://i.ytimg.com/vi/u2pAXa5shoY/mqdefault.jpg" />
        <Card.Body>
          <Card.Title>2023 UI/UX Designing Bootcamp</Card.Title>
          <Card.Text>
          User interface design(UI) and user experience design(UX) is a very crucial parts of determining the final output of software, applications, or process.User interface design & user experience design has lots of benefits.
          </Card.Text>
          <Card.Text>
          Rating: 4.5 out of 5
          </Card.Text>
          <Card.Text>
          <span style={{marginTop:'10px'}}>Free</span>
          <a href="/course1"><Button variant="primary" style={{float:'Right'}}>Start Course</Button></a>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
      </Row>

    

    </div>
<br></br>
<br></br>
<br></br>

{/* -----------------------------------------------Next section -----------------------------------------*/}
    <div className="paddingCard">
    <Row xs={1} md={2} lg={3} className="g-4">
    <h1>Top Categories</h1>
    </Row>

    <Row xs={1} md={2} lg={3} className="g-4">
    <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
        <Card.Body>
          <Card.Title>Development</Card.Title>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
        <Card.Body>
          <Card.Title>Design</Card.Title>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" />
        <Card.Body>
          <Card.Title>IT and Software</Card.Title>
        </Card.Body>
      </Card>
      </Col>

      </Row>

      <br/>
      <br/>
      <br/>
      <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" />
        <Card.Body>
          <Card.Title>Marketing</Card.Title>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" />
        <Card.Body>
          <Card.Title>Business</Card.Title>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card class="card-size">
        <Card.Img class="image-size" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" />
        <Card.Body>
          <Card.Title>Personal Development</Card.Title>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </div>
<br></br>
<br></br>
<br></br>
<br></br>
{/* --------------------------------------------------section 3------------------------------------------------------- */}
<div className="paddingCard">
    <Row xs={1} md={2} lg={2} className="g-4">
    
    <Col>
      <Card class="card-size-2">
        <Card.Img class="image-size-2" variant="top" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" />
        <Card.Body>
          {/* <Card.Title>Development</Card.Title> */}
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card class="card-size">
        {/* <Card.Img class="image-size-2" variant="top" src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" /> */}
        <Card.Body>
        <h1>Become an Instructor</h1>
        <br></br>
        <br></br>
          <Card.Title>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</Card.Title>
         <br></br>
         <br></br>
         <br></br>
          <Button variant="dark">Add Your Course</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
</div>
    </>
  );
}

