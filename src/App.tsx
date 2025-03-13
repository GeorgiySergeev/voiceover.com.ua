import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import ServicesPage from "./pages/services";
import OrderPage from "./pages/order";
import ClientsPage from "./pages/clients";
import ContactPage from "./pages/contact";
import routes from "tempo-routes";

function App() {
  return (
    <>
      {/* Tempo routes */}
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Add this before any catchall route */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

export default App;
