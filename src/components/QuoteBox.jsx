import React, { useState } from 'react';
import quotes from '../quotes.json';

const QuoteBox = () => {
    console.log(quotes)

    const colors = ["#845EC2", "#2C73D2", "#0081CF", "#0089BA", "#008E9B", "#008F7A", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#00C9A7", "#C34A36", "#FF8066", "#4E8397", "#D5CABD", "#338BA7", "#B0A8B9", "#B93DAF", "#D53624"]
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`
    document.body.button = `backgorund: ${colors[randomColor]}`


    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex ] = useState(random);

    const changeQuote = () => {
        const newRandom = Math.floor(Math.random() * quotes.length);
        setIndex(newRandom);
    }

    return (
        <div className='phraseBox' style={ { color: colors[randomColor] } }>
            
            <h1 className='phrase'><i class="fa-solid fa-quote-left" style={ { color: colors[randomColor] } }></i> {quotes[index].phrase}</h1>
            <h1 className='author'>{quotes[index].author}</h1>
            
            <img src="" alt="" />
            <button className='button' onClick={changeQuote} style={ { color: colors[randomColor] } }><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default QuoteBox;