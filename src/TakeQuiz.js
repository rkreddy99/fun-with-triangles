import { useState } from "react";
import "./TakeQuiz.css";

function TakeQuiz() {
    const [selection, setSelection] = useState(Array.apply(null, Array(10)).map(function () {return null}));
    const [match, setMatch] = useState(Array.apply(null, Array(10)).map(function () {return null}))
    const [msg, setMsg] = useState("");

    const optionValues = ["option1","option2","option3"]

    const quesAns = [
        {
            ques: "1. If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?",
            options: ["yes", "no"]
        },
        {
            ques: "2. If a triangle has angles 1150, 250, 400. Is it an acute triangle?",
            options: ["yes", "no"]
        },
        {
            ques: "3. If a triangle has angles 900, 600, 300. Is it a right angle triangle?",
            options: ["yes", "no"]
        },
        {
            ques: "4. A triangle has angles 600, 600, 600. Is it an equilateral triangle?",
            options: ["yes", "no"]
        },
        {
            ques: "5. If a triangle has angles 250, 750, 800. Is it an acute triangle?",
            options: ["yes", "no"]
        },
        {
            ques: "6. If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?",
            options: ["Equilateral", "Isosceles", "Right Angle Triangle"]   
        },
        {
            ques: "7. If a triangle has 2 angles of 750. What is the measure of third angle in degree?",
            options: [25, 30, 15]
        },
        {
            ques: "8. If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?",
            options: ["Equilateral", "Isosceles", "Both"]
        },
        {
            ques: "9. The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
            options: ["15cm", "45cm", "5cm"]
        },
        {
            ques: "10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
            options: ["Equilateral", "Isosceles", "Scalene"]   
        }
    ]

    const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];

    function setOptions(event) {
        let selectedOptions = [...selection];
        selectedOptions[Number(event.target.name)] = event.target.value;
        setSelection(selectedOptions)
    }

    function submitQuiz() {
        let correct = 0;
        let wrong = 0;
        let unattempted = 0;
        let answerMatch = [...match]
        for (let i=0; i<selection.length; i++) {
            if (selection[i] === null) {
                unattempted += 1;
            } else if (selection[i] !== correctAns[i]){
                wrong += 1;
                answerMatch[i] = "wrong"; 
            } else if (selection[i] === correctAns[i]) {
                correct += 1;
                answerMatch[i] = "correct"; 
            }
        }
        setMatch(answerMatch);
        setMsg(`Correct: ${correct}, Wrong: ${wrong}, Unattempted: ${unattempted}.`)
    }

    return (
        <div className="TakeQuiz">
            <p className="info">Quiz on triangles</p>
            {
                quesAns.map((elem, index) => {
                    return (
                    <div 
                        className="quiz" 
                        style={
                                match[index] === "correct" ? {backgroundColor:"green"} : 
                                match[index] === "wrong" ? {backgroundColor:"palevioletred"} : 
                                {}
                            } 
                        onChange={event => {setOptions(event)}}
                    >
                        <p>{elem.ques}</p>
                        {elem.options.map((option, ind) => {
                            return (
                            <label>
                            <input type="radio" value={optionValues[ind]} name={index} required/>
                            <span>{option}</span><br/>
                            </label>
                            )
                        })}
                    </div>)
                })
            }
            <button onClick={submitQuiz}>Submit Quiz</button>
            {msg !== "" && <div className="output">
                <p>{msg}</p>
            </div>}
        </div>
    );
}

export default TakeQuiz;