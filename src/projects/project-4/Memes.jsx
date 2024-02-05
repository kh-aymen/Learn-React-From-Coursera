import React from 'react'
import './Memes.css'
import faceImg from '../../assets/Troll Face.png'

const Memes = () => {
    return (
        <>
            <div className="Memes-navbar">
                <div className="logo">
                    <img src={faceImg} alt="" />
                    <h1>Meme Generator</h1>
                </div>
                <p>React Course - Project 4</p>
            </div>

            <div className="Memes-form">
                <form>
                    <div className="inputs">
                        <div>
                            <label htmlFor="top">Top Text</label>
                            <input
                                type="text"
                                id='top'
                                name='top'
                                required
                                placeholder='Top Text' />
                        </div>
                        <div>
                            <label htmlFor="bottom">Bottom Text</label>
                            <input
                                type="text"
                                id='bottom'
                                name='bottom'
                                required
                                placeholder='Bottom Text' />
                        </div>
                    </div>
                    <button type="submit">Get A New Meme Image 🖼</button>
                </form>
            </div>

        </>
    )
}

export default Memes