import About from "../components/About"
import Destacado from "../components/Destacado"
//import Expositions from "../components/Expositions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"


const Home = () => {
  return (
    <>
    <NavBar/>
      <Header />
      <Destacado />
      <About />
      <Footer />
    </>
  )
}

export default Home