import * as React from "react";
import PropTypes from 'prop-types';

const Card = ({portfolioImg}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = portfolioImg;
    return (
        <div id={`card-${index}`} className="c-card">
            <img className="c-card__img" src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
               
        
            </div>
        </div>
    )
}

Card.propTypes = {
    portfolioImg: PropTypes.object.isRequired
}

export default Card;