import "../css/House.css";
import housePic from "../images/house.jpeg";

const House = (props) => {
    return (
        <section className="house">
            <img src={housePic} alt="house" />
            <div className="house-description">
                <h1>{props.name}</h1>
                <p>Num Bedrooms: {props.num_bedrooms}</p>
            </div>
        </section>
    );
};

export default House;