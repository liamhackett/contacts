import React from "react";
import './Card.css';
const Card = ({id, name, email}) => {
    return (
        <div className="card dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;