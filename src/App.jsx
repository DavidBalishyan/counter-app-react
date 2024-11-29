import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import ThreeDView from "./components/ThreeDView";
import Home from "./pages/Home";

document.title = "A simple counter app || By David Balishyan"

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/animation" element={<ThreeDView />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
