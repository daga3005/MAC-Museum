import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Expositions from './pages/expositions'
import Galery from "./pages/galery";
import Visit_us from "./pages/visit_us";
import NavBar from "./components/NavBar";
import Tickets from "./pages/tikets";





export default function App() {



  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expositions" element={<Expositions />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/visit_us" element={<Visit_us />} />
      <Route path="/tickets" element={<Tickets />} />
    </Routes>
    </BrowserRouter>
  );
};


