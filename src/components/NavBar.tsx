import { useState } from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
    const [open, setIsOpen]= useState(false)

    return (
        <>
            <nav className="w-full fixed top-0 left-0 bg-black/70 backdrop-blur text-white z-50">
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold">MAC</h1>
                    <button className="md:hidden" onClick={() => setIsOpen(!open)} > ☰ </button>
                    <ul className="hidden md:flex gap-6">
                        <Link className="hover:text-gray-300 cursor-pointer" to={'/'}>Inicio</Link>
                        <Link className="hover:text-gray-300 cursor-pointer" to={'/expositions'}>Exposiciones</Link>
                        <Link className="hover:text-gray-300 cursor-pointer" to={'/galery'}>Galería</Link>
                        <Link className="hover:text-gray-300 cursor-pointer" to={'/visit_us'}>Visítanos</Link>
                    </ul>
                </div>
                {open && (<ul className="md:hidden bg-black/90 p-4 space-y-4 text-center">
                    <li>Inicio</li>
                    <li>Exposiciones</li>
                    <li>Galería</li>
                    <li>Visítanos</li>
                </ul>)}
            </nav> 
            ;
        </>
    )
}

export default NavBar