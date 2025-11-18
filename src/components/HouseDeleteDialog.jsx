import React, { useState } from "react"

const HouseDeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteHousePlan = async() => {
        const response = await fetch(`http://localhost:3001/api/houses/${props._id}`, {
            method:"DELETE"
        });

        if(response.status === 200) {
            setResult("House successfully delete");
            props.closeDeleteDialog();
            props.hideHouse();
        } else {
            setResult("Sorry, we couldn't delete the house");
        }

    };

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteHousePlan}>Yes</button>
            </section>
            <span>{result}</span>
        </div>
    );
};

export default HouseDeleteDialog;