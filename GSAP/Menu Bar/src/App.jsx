import { useEffect, useState } from 'react'
import './App.css'
import gsap from "gsap"
import SplitText from "gsap/SplitText";

function App() {
  const [show , setShow] = useState(null)
  gsap.registerPlugin(SplitText);
  useEffect( () => {
    gsap.to( ".menu" , 
      {
        backgroundColor:"white",
        borderRadius : "5em",
        color : "#000",
        padding : "1em 2em"
      }
    )
  } )
  useEffect( () => {
    if( show ){
      gsap.to( ".menu" , {
        width : "100vw",
        duration : 0.5,
        borderRadius : 100,
        ease : "power4.inOut"
      } )
      gsap.to( ".menu" , {
        height:"100vh",
        delay : 0.1,
        duration : 0.6,
        borderRadius : "10em",
        ease : "power2.inOut",
        onComplete: () => {
          gsap.to(".menu", { borderRadius: "5em" });
        }
      } )
      const split = new SplitText(".options", { type: "chars" });
      gsap.from(split.chars, {
        display : "none",
        x: 150,
        opacity: 0,
        duration: 0.7, 
        ease: "power4",
        stagger: 0.04,
        delay : 0.5
      });
    }
    else{
      gsap.to( ".menu" , {
        delay : 0.5,
        width : "auto",
        borderRadius : "5em",
        height : "auto",
        ease : "power1.inOut"
      } )
    }
  } , [show] )
  return (
    <>
      <div
        onClick={() => {
          const options = document.querySelectorAll(".options");
          if (show && options.length > 0) {
            gsap.to(options, {
              opacity: 0,
              x: -50,
              duration: 0.2,
              stagger: 0.2,
              ease: "power4.out",
              onComplete: () => setShow(false)
            });
          } else if (!show) {
            setShow(true);
          }
        }}
        className={`menu ${show ? "open" : "close"}`}
      >
        <span style={{ opacity: show ? 0 : 1 }}>Menu</span>
        {show &&
          ["Welcome", "Book Resort", "Houses", "FeedBack"].map((option, idx) => (
            <div className="options" key={option + idx}>
              {option}
            </div>
          ))}
      </div>
    </>
  );
}

export default App
