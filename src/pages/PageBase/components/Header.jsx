import React from "react";
import {NavLink} from "react-router-dom";

import MainLogo from "../../../components/MainLogo";

const Header = () => {
    return (
        <div>
            <div className="py-2 px-16 w-full flex justify-between bg-[#007f6e]">
                <MainLogo />

                <nav className="flex items-center mr-10 gap-5 text-white font-bold uppercase">
                    <NavLink className="hover:opacity-70" to="/about"> О Компании </NavLink>
                    <NavLink className="hover:opacity-70" to="/products"> Продукты </NavLink>
                    <NavLink className="hover:opacity-70" to="/business"> Бизнес с NSP </NavLink>
                    <NavLink className="hover:opacity-70" to="/about_me"> Обо мне </NavLink>
                    <NavLink className="hover:opacity-70" to="/article"> Полезные Статья </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;
