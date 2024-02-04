import React from 'react'
import './Travel.css'
import data from './data'
import earth from '../../assets/earth.png'
import Card from './Card'

const Travel = () => {

    var card = data.map(item => {
        return (
            <Card
                key={item.title + item.description}
                item={item}
            />
        )
    })


    return (
        <>
            <div className="travel">
                <div className="travel-nav">
                    <img src={earth} alt="" />
                    <p>Khalfi Aymen</p>
                </div>
                <div className="travel-cards">
                    {card}
                </div>
            </div>
        </>
    )
}

export default Travel