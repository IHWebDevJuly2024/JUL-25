import "./App.css";
import Dice from "./components/Dice";
import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import DetailsPage from "./pages/DetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/contact" element={<h2>CONTACT</h2>} />
        <Route path="/details/:apartment_id" element={<DetailsPage />} />
        <Route path="*" element={<h2>404 This route does not exist</h2>} />
      </Routes>
    </>
  );
}

export default App;
