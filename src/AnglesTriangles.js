import { useState } from "react";
import "./AnglesTriangles.css";

function AnglesTriangles() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [msg, setMsg] = useState("");

    function checkTriangle(event) {
        event.preventDefault();
        if (a <= 0 || b <= 0 || c <= 0){
            setMsg("Angle should be a positive number!!!")
        } else if (a+b+c !== 180) {
            setMsg("These set of angles DOESN'T form a triangle.")
        } else if (a+b+c === 180) {
            setMsg("These angles can form a triangle.")
        }
    }

    function setAngle(setangle, event) {
        setangle(Number(event.target.value))
    }

    return (
        <div className="AnglesTriangles">
            <p>Enter angles to find out whether it forms a triangle.</p>
            <form onSubmit={checkTriangle}>
                <span>A : </span>
                <input
                    className="angle A"
                    type="number"
                    placeholder="Angle A"
                    onChange={(event) => setAngle(setA, event)}
                    value={a}
                    min="0.0001"
                    step="any"
                    required
                />
                <br/>
                <span>B : </span>
                <input
                    className="angle B"
                    type="number"
                    placeholder="Angle B"
                    onChange={(event) => setAngle(setB, event)}
                    value={b}
                    min="0.0001"
                    step="any"
                    required
                />
                <br/>
                <span>C : </span>
                <input
                    className="angle C"
                    type="number"
                    placeholder="Angle C"
                    onChange={(event) => setAngle(setC, event)}
                    value={c}
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

export default AnglesTriangles;