import { useState } from "react";
import { animals } from "../assets/AnimalsDb";

export default function Gamecompo() {
    const [targetAnimal, setTargetAnimal] = useState(getRandomAnimal());
    const [result, setResult] = useState(null);
    function getRandomAnimal() {
        const randomIndex = Math.floor(Math.random() * animals.length);
        return animals[randomIndex];
    }
    const handleAnimalClick = (id) => {
        if (id === targetAnimal.name) {
            setResult("Win");
        } else {
            setResult("Lose");
        }
    };
    const restartGame = () => {
        setTargetAnimal(getRandomAnimal());
        setResult(null);
    };

    return (
        <>
            <table border='1'>

                <div className="App">
                    <tr >
                    <th colSpan={3}>
                        <h1>Animal Matching Game</h1>
                    </th>
                    </tr>
                    <tr>
                        <td>

                            
                                <div className="result">
                                    <h2>Result</h2>
                                    <p className={result==="Win"?"green":"orange"}>{result}</p>
                                    <button onClick={restartGame}>Play Again</button>
                                </div>
                            

                        </td>
                        <td>
                            <div className="header">
                                <h2>Animal name<br/></h2>
                                <p className="orange"> <b>{targetAnimal.name}</b> </p>
                            </div>
                        </td>
                        <td>
                            <div className="grid">
                                {animals.map((animal) => (
                                    <div
                                        key={animal.id}
                                        className="card"
                                        onClick={() => handleAnimalClick(animal.name)}
                                    >
                                        <img src={"/fig/" + animal.img} alt={animal.name} />
                                        
                                    </div>
                                ))}
                            </div>
                        </td>

                    </tr>
                </div>
            </table>
        </>
    );
}