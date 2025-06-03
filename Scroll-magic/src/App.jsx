import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import gsap from "gsap"
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
function App() {
  useEffect( () => {
    let ctx = gsap.context( () => {
      let panels = gsap.utils.toArray(".panel")
      gsap.to( panels , {
        xPercent : -100 * (panels.length-1),
        scrollTrigger : {
          trigger : ".container",
          scrub : true,
          pin : true
        }
      } )
    } )
    return () => ctx.revert()
  } , [] )
  return (
  <>
    <div className="App">
      <div className="home flex">This is Home</div>
      <div className="container">
        <div className="panel flex">Panel1</div>
        <div className="panel flex">Panel2</div>
        <div className="panel flex">Panel3</div>
        <div className="panel flex">Panel4</div>
      </div>
      <div className="footer flex">This is Footer</div>
    </div>
  </>
  )
}

export default App
