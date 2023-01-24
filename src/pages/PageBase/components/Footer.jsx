import React from "react";
import {NavLink} from "react-router-dom";

import MainLogo from "../../../components/MainLogo";

import A1Logo from "../assets/A1Logo.png";
import TelegramLogo from "../assets/TelegramLogo.png";
import MailLogo from "../assets/MailLogo.png";

const Footer = () => {
    return (
        <div className="py-10 px-16 w-full bg-[#007f6e]">
            <div className="flex justify-between">
                <MainLogo/>

                <nav className="flex flex-col mr-6 gap-4 text-white font-black">
                    <NavLink className="hover:opacity-70" to="/news"> О Компании </NavLink>
                    <NavLink className="hover:opacity-70" to="/news"> Продукты </NavLink>
                    <NavLink className="hover:opacity-70" to="/news"> Цены </NavLink>
                </nav>
                <nav className="flex flex-col gap-4 text-white font-black">
                    <NavLink className="hover:opacity-70" to="/news"> Бизнес с NSP </NavLink>
                    <NavLink className="hover:opacity-70" to="/news"> Обо мне </NavLink>
                    <NavLink className="hover:opacity-70" to="/news"> Полезные Статья </NavLink>
                </nav>

                <div className="flex flex-col gap-4 text-white">
                    <div className="flex items-center">
                        <img className="w-8 mr-3" src={A1Logo} alt="A1Logo" />
                        <div>+375(29)616-95-20</div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-7 mr-3" src={TelegramLogo} alt="TelegramLogo" />
                        <div>@EllaMatu</div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-7 mr-3" src={MailLogo} alt="MailLogo" />
                        <div>nsp.elvira.mat.gmail.com</div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 text-white">
                <div className="text-center">
                    © Nspnaturprod.com 2023.Все Права Защищены.
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
