import data from "./data.json"
import {useState, useEffect} from "react"
import "./App.css"
import { generateColorPalette } from "./generate-color-palette";
export default function Challenge(){
    const [palette, setPalette] = useState([]);
    useEffect(() => {
        generateColorPalette(setPalette);
    }, []);

    function getRandomItem (array) {
         return array[Math.floor(Math.random() * array.length)];
    }

    function getRandomIntInRange (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateChallenge = () => ({
        floors: getRandomIntInRange(1, 4),
        rooms: getRandomIntInRange(1, 10),
        style: getRandomItem(data.style),
        sims: getRandomItem(data.sims),
        lotSize: getRandomItem(data.lotSize),
        budget: getRandomIntInRange(12000, 100000),
        must: getRandomItem(data.must),
        optional: getRandomItem(data.optional),
    });

    const [challenge, setChallenge] = useState(generateChallenge);

    const handleClick = () => {
        setChallenge(generateChallenge());
        generateColorPalette(setPalette);
    }
    return(
        <div className="generate-container">
            <div className="challenge-container">
                <p>Create a 
                <span> {challenge.floors}</span> story,
                <span> {challenge.rooms}</span> room 
                <span> {challenge.style}</span> style house for 
                <span> {challenge.sims}</span> on a 
                <span> {challenge.lotSize}</span> lot with a budget of 
                <span> {challenge.budget}</span>. 
                </p>
                <p>You must include: 
                <span> {challenge.must}</span>.
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
                <p>Make it more difficult: <span>{challenge.optional}</span>.</p>
            </div>
            <div className="generate-btn-container">
                <button onClick={handleClick}>Generate New Challenge</button>
            </div>
        </div>
    )
}