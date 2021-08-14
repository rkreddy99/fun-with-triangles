import { useState } from "react";
import "./CalcHypotenuse.css";
import triangle from "./images/righttriangle.png"

function CalcHypotenuse() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [msg, setMsg] = useState("");

    function hypotenuseLength(event) {
        event.preventDefault();
        let hyp = (a**2 + b**2)**0.5
        hyp = Number((hyp).toFixed(2))
        setMsg(`The length of hypotenuse is ${hyp} units.`)
    }

    function setSide(setlength, event) {
        setlength(Number(event.target.value))
    }

    return (
        <div className="CalcHypotenuse">
            <p>Enter lenghts of sides to find out hypotenuse length.</p>
            <img src={triangle} alt="triangle" />
            <form onSubmit={hypotenuseLength}>
                <span>a : </span>
                <input
                    className="side A"
                    type="number"
                    placeholder="Side a"
                    onChange={(event) => setSide(setA, event)}
                    value={a}
                    min="0.0001"
                    step="any"
                    required
                />
                <br/>
                <span>b : </span>
                <input
                    className="side B"
                    type="number"
                    placeholder="Side b"
                    onChange={(event) => setSide(setB, event)}
                    value={b}
                    min="0.0001"
                    step="any"
                    required
                />
                <br/>
                <button type="submit">Check</button>
            </form>
            <div className="output">
                {msg !== "" && <p>{msg}</p>}
            </div>
        </div>
    );
}

export default CalcHypotenuse;