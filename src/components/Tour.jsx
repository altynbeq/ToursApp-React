import React from "react";
import { useState } from "react";

export const Tour = ({id,name, image, info, price, removeTour }) => {
    // toggle text length
    const [readMore, setRead] = useState(false);
    return(
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0,200)}...`}
                <button onClick={ () => setRead(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button></p>
                <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
            </footer>
        </article>
    )
}