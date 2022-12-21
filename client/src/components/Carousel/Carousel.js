import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
function ThisCarousel() {
  return (
    <>
    <div >
    <Carousel>
      {/* <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="http://www.designorlando.com/wp-content/uploads/2013/04/landscape-3-800x40011.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/bf1bd00b-e65c-4d18-8b3a-0176cfbb3601.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default ThisCarousel;