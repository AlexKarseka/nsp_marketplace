import React from "react";
import {NavLink} from "react-router-dom";

import MainLogoImg from "../assets/logo-white.png"

const MainLogo = () => {
    return (
        <NavLink className="hover:opacity-70" to="/">
            <div className="flex">
                <img className="w-12 mr-2" src={MainLogoImg} alt="logo"/>
                <div className="my-auto">
                    <div className="text-white text-sm uppercase">Независимый партнер</div>
                    <div className="text-white text-sm uppercase font-black">Elvira Matusevich</div>
                </div>
            </div>
        </NavLink>
    );
};

export default MainLogo;
