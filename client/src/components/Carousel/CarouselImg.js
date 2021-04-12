import { Carousel, Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const CarouselImg = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={10} sm={10} className="mx-auto">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="tutor and student"
                // style={{ height: "600px" }}
              />
              <Carousel.Caption>
                <h3>Hire professional tutor</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                // style={{ height: "600px" }}
              />

              <Carousel.Caption>
                <h3 className="text-dark">Hire professional tutor</h3>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                // style={{ height: "600px" }}
              />

              <Carousel.Caption>
                <h3>Hire professional tutor</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselImg;
