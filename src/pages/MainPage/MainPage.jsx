import React from "react";

import PageBase from "../PageBase/PageBase";
import MainBanner from "./components/MainBanner";
import Description from "./components/Description";
import WhyNsp from "./components/WhyNsp";
import Advantages from "./components/Advantages";
import QualityServiceReliability from "./components/QualityServiceReliability";
import Reviews from "./components/Reviews";
import DiscountForm from "./components/DiscountForm";

const MainPage = () => {
    return (
        <PageBase>
            <MainBanner />
            <Description />
            <WhyNsp />
            <Advantages />
            <QualityServiceReliability />
            <Reviews />
            <DiscountForm />
        </PageBase>
    )
}

export default MainPage;
