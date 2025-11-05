import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/House.css";
import House from "../components/House";

const HouseList = (props) => {
    const [houses, setHouses] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
            setHouses(response.data.splice(0,props.num));
        };

        loadHouses();
    },[]);

    return (
        <div id="house-list" className="columns">
            {houses.map((house)=>(
                <House  key={house._id} 
                        id={house._id}
                        name={house.name} 
                        size={house.size}
                        bedrooms={house.bedrooms}
                        bathrooms={house.bathrooms}
                        main_image={house.main_image}
                        features={house.features} />
            ))}
        </div>
    )
};

export default HouseList;