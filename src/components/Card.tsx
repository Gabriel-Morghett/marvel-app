import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
    name: string;
    id: string;
    thumbnail: string;
}

const Card: React.FC<CardProps> = ({ name, id, thumbnail }) => {
    return (
        <Link to={`/${id}`} target="_blank">
            <div className="card">
                <img src={thumbnail} alt="thumbnail" />
                <h1 className="card-name">{name}</h1>
            </div>
        </Link>
    );
}
  
export default Card;