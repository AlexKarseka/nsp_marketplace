import React from "react";
import MainLogo from "../assets/MainLogo.jpg";

const MainBanner = () => {
    return (
        <div>
            <img className="w-full" src={MainLogo} alt="mainLogo" />
        </div>
    );
};

export default MainBanner;
