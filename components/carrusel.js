import Carousel from 'react-bootstrap/Carousel';
import { Container, Image } from 'react-bootstrap';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

const num = 3;
const imageSize = '1920x1080';
const imageUrls = [];

function getRandomImage() {
  return `https://source.unsplash.com/random/${imageSize}?sig=${Math.random()}`;
}

for (let i = 0; i < num; i++) {
  const imageUrl = getRandomImage();
  imageUrls.push(imageUrl);
}

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <Image style={{ width: "100%", height: "70%" }} src={imageUrls[0]} rounded />
        <Carousel.Caption>
          <h3>Idea Innovadora</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <Image style={{ width: "100%", height: "70%" }} src={imageUrls[1]} rounded />
        <Carousel.Caption>
          <h3>Encabezado Asombroso</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image style={{ width: "100%", height: "70%" }} src={imageUrls[2]} rounded />
        <Carousel.Caption>
          <h3>Titulo LLamativo</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;