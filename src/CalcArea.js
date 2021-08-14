import { useState } from "react";
import "./CalcArea.css";
import triangle from "./images/triangle.png"
import heightbasetriangle from "./images/hbtri.png"
import sidesangletriangle from "./images/sidesangletri.png"

function CalcArea() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [msg, setMsg] = useState("");
    const [choice, setChoice] = useState(null);

    function areawithsides() {
        let c1 = a + b > c
        let c2 = c + b > a
        let c3 = a + c > b
        if (c1 && c2 && c3) {
            let s = (a + b + c) / 2
            let totalArea = s*(s-a)*(s-b)*(s-c) 
            return totalArea**0.5
        } else {
            return -1
        }
    }

    function hbarea() {
        return a*b/2
    }

    function sideanglearea() {
        return 0.5*b*c*Math.sin(a*Math.PI/180)
    }

    function getArea(event) {
        event.preventDefault();
        var area = 0;
        if (choice === 1) {
            area = hbarea();
        } else if (choice === 2) {
            area = areawithsides();
        } else if (choice === 3) {
            area = sideanglearea();
        }
        if (parseInt(area) === -1) {
            setMsg("Cannot form triangle with given sides :(")
        } else {
            area = Number((area).toFixed(2))
            setMsg(`Area of the triangle is ${area} sq. units.`)
        }
    }

    function setParam(setvalue, event) {
        setvalue(Number(event.target.value))
    }

    const choiceStyle = {
        backgroundColor: "brown",
        color: "goldenrod",
        borderColor: "goldenrod",
    }

    return (
        <div className="CalcArea">
            <p>You want to find the area of triangle with ...</p>
            <button 
                className="choice" 
                style={choice === 1 ? choiceStyle : {}} 
                onClick={()=>{setChoice(1);setA("");setB("");setC("")}}
            >
                Height and base
            </button>
            <button 
                className="choice" 
                style={choice === 2 ? choiceStyle : {}} 
                onClick={()=>{setChoice(2);setA("");setB("");setC("")}}
            >
                3 sides
            </button>
            <button 
                className="choice" 
                style={choice === 3 ? choiceStyle : {}} 
                onClick={()=>{setChoice(3);setA("");setB("");setC("")}}
            >
                2 sides and the angle between them
            </button>
            {choice && 
            <div>
                {choice === 1 && <img src={heightbasetriangle} alt="triangle" />}
                {choice === 2 && <img src={triangle} alt="triangle" />}
                {choice === 3 && <img src={sidesangletriangle} alt="triangle" />}
                <form onSubmit={getArea}>
                    <span>{choice === 1 ? "h " : "a "}:</span>
                    <input
                        className="side A"
                        type="number"
                        placeholder={
                            choice === 1 ? "height" :
                            choice === 2 ? "side a" : "Angle A"
                        }
                        onChange={(event) => setParam(setA, event)}
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
                        placeholder={
                            choice === 1 ? "base" : "side b"
                        }
                        onChange={(event) => setParam(setB, event)}
                        value={b}
                        min="0.0001"
                        step="any"
                        required
                    />
                    <br/>
                    {choice !== 1 && <span>c : </span>}
                    {choice !== 1 && <input
                        className="side C"
                        type="number"
                        placeholder="side c"
                        onChange={(event) => setParam(setC, event)}
                        value={c}
                        min="0.0001"
                        step="any"
                        required
                    />}
                    {choice !== 1 && <br/>}
                    <button type="submit">Find Area</button>
                </form>
                <div className="output">
                    {msg !== "" && <p>{msg}</p>}
                </div>
            </div>
            }
        </div>
    );
}

export default CalcArea;