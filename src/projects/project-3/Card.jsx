import React from 'react'
import './Card.css'
import locationIcon from '../../assets/location.png'

const Card = (props) => {

    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = { ...props.item }

    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="card-info">
                    <div className="location">
                        <span>
                            <img src={locationIcon} alt="" />
                            {location}
                        </span>
                        <a href={googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </div>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="description">
                        <h3>{startDate} - {endDate}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <hr className='card-hr'/>
        </>
    )
}

export default Card