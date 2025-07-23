import data from "./data.json"
import {useState, useEffect} from "react"
import "./App.css"
import { generateColorPalette } from "./generate-color-palette";
export default function Challenge(){
    const [palette, setPalette] = useState([]);
    useEffect(() => {
        generateColorPalette(setPalette);
    }, []);

    function getRandomPositiveInt (max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function getRandomIndex (max) {
         return Math.floor(Math.random() * max);
    }

    function getRandomIntInRange (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const generateChallenge = () => ({
        floors: getRandomPositiveInt(4),
        rooms: getRandomPositiveInt(10),
        style: data.style[getRandomIndex(data.style.length)],
        sims: data.sims[getRandomIndex(data.sims.length)],
        lotSize: data.lotSize[getRandomIndex(data.lotSize.length)],
        budget: getRandomIntInRange(10000, 100000),
        must: data.must[getRandomIndex(data.must.length)],
        optional: data.optional[getRandomIndex(data.optional.length)],
    });

    const [challenge, setChallenge] = useState(generateChallenge);

    const handleClick = () => {
        setChallenge(generateChallenge());
        generateColorPalette(setPalette);
    }
    return(
        <div className="generate-container">
            <div className="challenge-container">
                <p>{`Create a ${challenge.floors} story, ${challenge.rooms} room ${challenge.style} style house for ${challenge.sims} 
                    on a ${challenge.lotSize} lot with a budget of ${challenge.budget}. You must include ${challenge.must}.`}
                </p>
                <p>This is your color palette:</p>
                <div className="palette-container">
                    {palette.map((color, index) => (
                    <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    />
                ))}
                </div>
                <p>Make it more difficult: {challenge.optional}.</p>
            </div>
            <div className="generate-btn-container">
                <button onClick={handleClick}>Generate New Challenge</button>
            </div>
        </div>
    )
}