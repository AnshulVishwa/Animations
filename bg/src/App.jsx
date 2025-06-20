import { useEffect } from 'react'
import './App.css'
import gsap from "gsap"

function App() {
  useEffect(() => {
    gsap.to("#root", {
      "--p": "#000",
      ease: "power.in",
      duration: 5
    });
  }, []);
  return (
    <>

    </>
  )
}

export default App
