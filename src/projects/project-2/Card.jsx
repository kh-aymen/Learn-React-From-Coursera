import React from 'react'
import './Card.css'
import starImg from './../../assets/Star 1.png'

const Card = (props) => {
    const { img, rating, reviewCount, country, title, price, openSpots } = props

    let badgeText
    if (openSpots === 0) {
        badgeText = "Sould Out"
    } else if (country.toUpperCase() === "ONLINE") {
        badgeText = "Online"
    }
    
    return (
        <>
            <div className="card">
                {badgeText && <button className='card-btn'>{badgeText}</button>}
                <img src={img} alt="" className='card--image' />
                <div className="card-status">
                    <img src={starImg} alt="" className='card--star--img' />
                    <span>{rating}</span>
                    <span className='gray'>({reviewCount}) •</span>
                    <span className='gray'>{country}</span>
                </div>
                <p>{title}</p>
                <p><strong>From ${price} </strong>/ Person</p>
            </div>
        </>
    )
}

export default Card
