import React from "react";
import "./Card.css"
import Button from "./Button/Button"

const Card = ({name,description,price,img}) => {

    return (
    <div className ="card-container">
        <div className ="card-content">
            <img src={img} alt="producto"></img>
            <div className="card-info">
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <Button/>
            </div>
        </div>
    </div>
    )
}
export default Card;