import Carousel from 'react-bootstrap/Carousel';
import '../Components/Slider.css'
function Slider() {
  return (

    <div className='slider'>
      <Carousel variant="dark" className='carouselImage'>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYWNlbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYWNlbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=6"
            alt="Second slide"
          />
          <Carousel.Caption>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amV3ZWxyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10"
            src="https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVhcnJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-10"
            src="https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVhcnJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;