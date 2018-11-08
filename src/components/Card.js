import * as React from "react";
import PropTypes from 'prop-types';

const Card = ({portfolioImg}) => {
    const {index, picture, txt} = portfolioImg;
    return (
        <div id={`card-${index}`} className="c-card">
            <img className="c-card__img" src={picture} alt={txt} />
            <div className="details">
                <span className="index">{txt}</span>
               
        
            </div>
        </div>
    )
}

Card.propTypes = {
    portfolioImg: PropTypes.object.isRequired
}

export default Card;