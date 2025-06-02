import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"

function App() {
  gsap.registerPlugin(ScrollTrigger) 
  useEffect( () => {
    gsap.timeline( {
      scrollTrigger : ".box"
    } )
    .from( ".box" , {
      opacity : 0
    } )
    .to( ".box" , {
      opacity : 1,
      duration : 1
    } )
  } , [] )
  return (
    <>
    <div className="container">
    </div>
      <div className="box"></div>
    </>
  )
}

export default App
