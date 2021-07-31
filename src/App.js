import { useState } from 'react';
import './App.css';
import AnglesTriangles from './AnglesTriangles';
import CalcHypotenuse from './CalcHypotenuse';
import CalcArea from './CalcArea';
import TakeQuiz from './TakeQuiz';

function App() {

  const [section, setSection] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Welcome to fun with triangles</h1>
      </header>
      <div className="container">
        {section !== 0 && 
          <button className="go-back" onClick={() => {setSection(0)}}>
            ⬅ Back
          </button>}
        {section === 0 && <div className="home-section">
          <div className="row top">
            <button className="left cell" onClick={() => setSection(1)}>
              <p>Angles of Triangle</p>
            </button>
            <button className="right cell" onClick={() => setSection(2)}>
              <p>Calculate Hypotenuse</p>
            </button>
          </div>
          <div className="row bottom">
            <button className="left cell" onClick={() => setSection(3)}>
              <p>Calculate Area</p>
            </button>
            <button className="right cell" onClick={() => setSection(4)}>
              <p>Take a quiz?</p>
            </button>
          </div>
        </div>}
        {section === 1 && <AnglesTriangles/>}
        {section === 2 && <CalcHypotenuse/>}
        {section === 3 && <CalcArea/>}
        {section === 4 && <TakeQuiz/>}
      </div>
      <footer>
        <p>A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry. A triangle with vertices A, B, and C is denoted 🛆ABC.</p>
      </footer>
    </div>
  );
}

export default App;
