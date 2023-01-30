import React from "react";
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Business from "./pages/Business/Business";
import AboutMe from "./pages/AboutMe/AboutMe";
import Article from "./pages/Article/Article";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/business" element={<Business/>}/>
                <Route path="/about_me" element={<AboutMe/>}/>
                <Route path="/article" element={<Article/>}/>
            </Routes>
        </div>
    );
}

export default App;
