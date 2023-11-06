import React from 'react';
import memesData from '../memesData.js';

const Meme = () => {

    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottonText: "",
        randomImage: "",
    });

    const [ allMemeImages, setAllMemeImages ] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    // const [ memeImage, setMemeImage ] = React.useState(""); 
    // const getMemeImage = () => {
    //     const { data: { memes: memesArray } } = memesData;
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     setMemeImage(memesArray[randomNumber].url)
    // }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Botton text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--image" />

        </main>
    )
};

export default Meme;