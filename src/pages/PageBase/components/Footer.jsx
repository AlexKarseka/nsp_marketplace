import React from "react";
import {NavLink} from "react-router-dom";

import MainLogo from "../assets/logo-white.png";

const Footer = () => {
    return (
        <div className="py-10 px-16 w-full bg-[#007f6e]">
            <div className="flex justify-between">
                <NavLink className="hover:opacity-70" to="/">
                    <img className="w-44" src={MainLogo} alt="logo"/>
                    <div className="text-white uppercase font-black tracking-wider">Elvira Matusevich</div>
                </NavLink>

                <nav className="flex flex-col mr-6">
                    <NavLink className="text-white font-black mb-4 hover:opacity-70" to="/news"> Новости </NavLink>
                    <NavLink className="text-white font-black mb-4 hover:opacity-70" to="/news"> О Компании </NavLink>
                    <NavLink className="text-white font-black hover:opacity-70" to="/news"> Обо мне </NavLink>
                </nav>
                <nav className="flex flex-col">
                    <NavLink className="text-white font-black mb-4 hover:opacity-70" to="/news"> Бизнес с НСП </NavLink>
                    <NavLink className="text-white font-black mb-4 hover:opacity-70" to="/news"> Продукты </NavLink>
                    <NavLink className="text-white font-black hover:opacity-70" to="/news"> Статья </NavLink>
                </nav>

                <div>
                    e-mail и копия его
                </div>
            </div>

            <div className="mx-auto mt-16 text-white">
                <div className="text-center">
                    © Nspnaturprod.Com 2023.Все Права Защищены.
                </div>
                <div className="text-center mt-2">
                    Отправляя любую форму на сайте, вы соглашаетесь с
                    <NavLink className="mx-1 border-b border-white hover:opacity-60 font-black" to="/">
                        политикой конфиденциальности
                    </NavLink>
                    данного сайта.
                </div>
            </div>
        </div>
    );
};

export default Footer;
