import React, { useEffect } from "react"
// import memesData from "./MemeData.js"
import './Memes.css'

export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handlChange = (event) => {
        const { value, name } = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))
    }
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
            .catch(err => console.log(`The Error is ${err}`))
    }, [])

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handlChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handlChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}