import "../css/Slideshow.css";
import {useState} from "react";

const Slideshow = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    return(
        <section id="slideshow">
            <img src={images[slideIndex]} />
            <a className="arrow" id="right-arrow" href="#">&gt;</a>
            <a className="arrow" id="left-arrow" href="#">&lt;</a>
        </section>
    );
}

export default Slideshow;
    