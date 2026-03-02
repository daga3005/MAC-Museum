import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from "react"
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(useGSAP, ScrollTrigger)

const Header = () => {
  const container = useRef(null)



  useGSAP(() => {
    // gsap code here...
    let timeLine = gsap.timeline({
       scrollTrigger:{
        trigger: 'container',
        start: 'top top',
        end: '+=1500',
        scrub: 3,
        snap: {
			snapTo: 'labels', // snap to the closest label in the timeline
			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
			ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		}
       }
    })


    timeLine.to('#title', { x: -1300, duration: 2,ease: "power1.out" });
    timeLine.to('#subHeading', { x: 1500, duration: 2 ,ease: "power1.in" }, '<');
    timeLine.to('#button', { rotation: 360, duration: 6, ease: 'back.inOut' },"-=1")

  }, { scope: container });





  return (
    <section
      ref={container}
      className="h-[70vh] bg-[url('/images/img-1.jpg')] bg-cover bg-center flex 
    items-center justify-center text-center px-4">
      <div className="bg-black/40 p-6 rounded-xl">
        <h1 id="title" className="text-4xl md:text-6xl font-bold text-white">
          Museo de Arte Contemporáneo
        </h1>

        <p id="subHeading"
          className="text-gray-200 mt-4 text-lg mb-10 font-bold">
          Donde las ideas toman forma y el arte desafía los límites.
        </p>
        <Link to={'/expositions'}>
          <button
            id="button"
            className=" px-6 py-3 bg-white text-black font-semibold 
          rounded-md hover:bg-gray-200 transition ">
            Explorar Exposiciones
          </button>


        </Link>
      </div>

    </section>
  )
}

export default Header