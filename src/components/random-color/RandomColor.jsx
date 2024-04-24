import React, { useState } from 'react';
import './randomcolor.css'

const RandomColor = () => {

    const [color, setColor] = useState("#FFFFFF");
    const [colorType, setColorType] = useState("");

    const GenerateRandom = (num) => {
        return Math.floor(Math.random() * num);
    }

    const GenerateHex = () => {
        const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += hexArray[GenerateRandom(hexArray.length)];
        }
        setColor(hex);
        setColorType("HEX");
    }

    const GenerateRGB = () => {
        const r = GenerateRandom(256);
        const g = GenerateRandom(256);
        const b = GenerateRandom(256);
        const RGB = `rgb(${r}, ${g}, ${b})`;
        setColor(RGB);
        setColorType("RGB");
    }

    const GenerateRandomColour = () => {
        colorType === "HEX" ? GenerateRGB() : GenerateHex();
    }


    return (
            <div  className='container'  style={{ backgroundColor: color }}>
                <div className='btn-container' >
                    <button className='button' onClick={() => GenerateHex()}>Hex Color</button>
                    <button className='button' onClick={() => GenerateRGB()}>RGB Color</button>
                    <button className='button' onClick={() => GenerateRandomColour()}>Random</button>
                </div>
                <div className='text'>
                    {colorType === "HEX" ? <div className=''> HEXA COLOR : {color} </div> :
                        <div className=''> RGB COLOUR :  {color} </div>}
                </div>
            </div>
    )
}

export default RandomColor;