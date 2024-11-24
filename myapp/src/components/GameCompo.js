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
        if (id === targetAnimal.id) {
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
                        <p>Animal Matching Game</p>
                    </th>
                    </tr>
                    <tr>
                        <td>

                            {result && (
                                <div className="">
                                    <h2>{result}</h2>
                                    <button onClick={restartGame}>Play Again</button>
                                </div>
                            )}

                        </td>
                        <td>
                            <div className="header">
                                <h2>Find: {targetAnimal.name}</h2>
                            </div>
                        </td>
                        <td>
                            <div className="grid">
                                {animals.map((animal) => (
                                    <div
                                        key={animal.id}
                                        className="card"
                                        onClick={() => handleAnimalClick(animal.id)}
                                    >
                                        <img src={"/fig/" + animal.img} alt={animal.name} />
                                        <p>{animal.name}</p>
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