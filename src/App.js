import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ProjectsScreen from "./screens/projects/projects-screen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProjectsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
