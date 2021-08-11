import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../images/defaultImage.jpeg'
import PropTypes from 'prop-types';

export default function Car({car}) {

    const{name, slug, images, engine} = car;
    return (
        <article className='car'>
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="car brand" />
                <div className="engine-top">
                <h6>{engine}</h6>
                </div>

                <Link to={`/cars/${slug}`} className='btn-primary car-link'>Specs</Link>
            </div>
            <p className='car-info'>{name}</p>
        </article>
    )
}

Car.propTypes = {
    car:PropTypes.shape({
        name: PropTypes.string.isRequired, 
        slug: PropTypes.string.isRequired, 
        images: PropTypes.arrayOf(PropTypes.string).isRequired, 
    })
}