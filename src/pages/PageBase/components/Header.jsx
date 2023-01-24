import React from "react";

import MainLogo from "../assets/logo-white.png"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="py-5 px-16 w-full flex justify-between bg-[#007f6e]">
                <NavLink className="hover:opacity-70" to="/" >
                    <div className="flex">
                        <img className="w-12 mr-2" src={MainLogo} alt="logo" />
                        <div className="my-auto">
                            <div className="text-white text-sm uppercase">Независимый партнер</div>
                            <div className="text-white text-sm uppercase font-black">Elvira Matusevich</div>
                        </div>
                    </div>
                </NavLink>

                <nav className="flex items-center mr-10">
                    <NavLink className="text-white mr-4 font-black hover:opacity-70" to="/news"> Новости </NavLink>
                    <NavLink className="text-white mr-4 font-black hover:opacity-70" to="/news"> О Компании </NavLink>
                    <NavLink className="text-white mr-4 font-black hover:opacity-70" to="/news"> Обо мне </NavLink>
                    <NavLink className="text-white mr-4 font-black hover:opacity-70" to="/news"> Бизнес с НСП </NavLink>
                    <NavLink className="text-white mr-4 font-black hover:opacity-70" to="/news"> Продукты </NavLink>
                    <NavLink className="text-white font-black hover:opacity-70" to="/news"> Статья </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;
