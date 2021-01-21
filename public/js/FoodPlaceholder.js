import {Image, Carousel} from "react-bootstrap";
import {useState} from "react";

function FoodPlaceHolder() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel indicators={false} interval={5000} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image
                    className={"d-block w-100"}
                    src={"/images/1.jpg"}
                    alt="First image"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className={"d-block w-100"}
                    src={"/images/2.jpg"}
                    alt="Second image"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className={"d-block w-100"}
                    src={"/images/3.jpg"}
                    alt="Third image"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className={"d-block w-100"}
                    src={"/images/4.jpg"}
                    alt="Fourth image"/>
            </Carousel.Item>
        </Carousel>
    )
}

export default FoodPlaceHolder;