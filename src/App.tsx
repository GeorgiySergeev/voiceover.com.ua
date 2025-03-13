import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import routes from "tempo-routes";

function App() {
  return (
    <>
      {/* Tempo routes */}
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}

        {/* Add this before any catchall route */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

export default App;
