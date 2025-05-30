import { useEffect, useState } from "react";

function App() {
  const [letter1, setLetter1] = useState(null);
  const [letter2, setLetter2] = useState(null);
  const [letter3, setLetter3] = useState(null);
  const [letter4, setLetter4] = useState(null);
  const [letter5, setLetter5] = useState(null);
  const [letter6, setLetter6] = useState(null);
  const [letter7, setLetter7] = useState(null);

  function animateLetter(currLetter) {
    let i = 0;
    const interval = setInterval(() => {
      const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      const animatedSpan = <span className="animate" key={`rand-${currLetter}-${i}`}>{randomChar}</span>;

      switch (currLetter) {
        case 0: setLetter1(animatedSpan); break;
        case 1: setLetter2(animatedSpan); break;
        case 2: setLetter3(animatedSpan); break;
        case 3: setLetter4(animatedSpan); break;
        case 4: setLetter5(animatedSpan); break;
        case 5: setLetter6(animatedSpan); break;
        case 6: setLetter7(animatedSpan); break;
        default: break;
      }

      i++;
      if (i === 25) {
        clearInterval(interval);
        switch (currLetter) {
          case 0: setLetter1(null); break;
          case 1: setLetter2(null); break;
          case 2: setLetter3(null); break;
          case 3: setLetter4(null); break;
          case 4: setLetter5(null); break;
          case 5: setLetter6(null); break;
          case 6: setLetter7(null); break;
          default: break;
        }
      }
    }, 50); // faster animation
  }

  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      animateLetter(i);
    }
  }, []);

  return (
  <>
    {letter1 ?? <span key={1000} className="animate animate1">S</span>}
    {letter2 ?? <span key={1001} className="animate animate2">t</span>}
    {letter3 ?? <span key={1002} className="animate animate3">u</span>}
    {letter4 ?? <span key={1003} className="animate animate4">d</span>}
    {letter5 ?? <span key={1004} className="animate animate5">e</span>}
    {letter6 ?? <span key={1005} className="animate animate6">n</span>}
    {letter7 ?? <span key={1006} className="animate animate7">t</span>}
  </>
);

}

export default App;
