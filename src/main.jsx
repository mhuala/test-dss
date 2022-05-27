import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./Components/Navbar";
import App from "./Pages/App";
import Exportations from "./Pages/Exportations";
import Simulation from "./Pages/Simulation";
import Ciudad from "./Pages/Ciudad";
import Ciudades from "./Pages/Ciudades";
import Region from "./Pages/Region";
import Footer from "./Components/Footer";

const API = import.meta.env.VITE_API;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="flex flex-col h-screen justify-between bg-brand">
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/exportations" element={<Exportations />} />
                    <Route path="/cities" element={<Ciudades />} />
                    <Route path="/simulation" element={<Simulation />} />
                    <Route path="/region" element={<Region />} />
                    <Route path="/cities/valdivia" element={<Ciudad city="valdivia" />} />
                    <Route path="/cities/mariquina" element={<Ciudad city="mariquina" />} />
                    <Route path="/cities/corral" element={<Ciudad city="corral" />} />
                    <Route path="/cities/lagoranco" element={<Ciudad city="lagoranco" />} />
                    <Route path="/cities/lanco" element={<Ciudad city="lanco" />} />
                    <Route path="/cities/paillaco" element={<Ciudad city="paillaco" />} />
                    <Route path="/cities/panguipulli" element={<Ciudad city="panguipulli" />} />
                    <Route path="/cities/loslagos" element={<Ciudad city="loslagos" />} />
                    <Route path="/cities/launion" element={<Ciudad city="launion" />} />
                    <Route path="/cities/futrono" element={<Ciudad city="futrono" />} />
                    <Route path="/cities/riobueno" element={<Ciudad city="riobueno" />} />
                    <Route path="/cities/mafil" element={<Ciudad city="mafil" />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
