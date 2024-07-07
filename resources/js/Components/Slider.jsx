import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
    return (
        <Carousel>
            <div>
                <img src="https://dummyimage.com/600x400/000/fff" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://dummyimage.com/600x400/000/fff" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://dummyimage.com/600x400/000/fff" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}
