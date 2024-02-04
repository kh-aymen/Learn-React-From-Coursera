import React from 'react'
import './Airbnb.css'
import NavbarProject2 from '../../components/project2/NavbarProject2'
import hero2 from "../../assets/hero2.png"
import Card from './Card'
import data from './data'

const Airbnb = () => {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id    }
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })

    return (
        <>
            <div className="container">
                <NavbarProject2 />
                <div className="landingPage">
                    <div className="images">
                        <img src={hero2} alt="" />
                    </div>
                    <div className="text">
                        <h1>Online Experiences</h1>
                        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                        </p>
                    </div>
                </div>
            </div>

            <div className="cards">
                {cards}
            </div>


        </>
    )
}

export default Airbnb

