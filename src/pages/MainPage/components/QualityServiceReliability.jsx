import React from "react";

import Aid from "../assets/svg/aid-kit.svg";
import Lab from "../assets/svg/lab.svg";
import Airplane from "../assets/svg/airplane.svg";
import Eyedropper from "../assets/svg/eyedropper.svg";
import Gift from "../assets/svg/gift.svg";
import Truck from "../assets/svg/truck.svg";
import MagicWand from "../assets/svg/magic-wand.svg";
import Heart from "../assets/svg/heart.svg";

const QualityServiceReliability = () => {
    const qualityServiceReliabilityData = [
        {
            logo: Truck,
            title: "ДОСТАВКА",
            text: "Осуществляется доставка по всей России и странам СНГ"
        },
        {
            logo: Airplane,
            title: "ЗАВОД",
            text: "Завод в США гарантирует высочайшее качество продукции"
        },
        {
            logo: Aid,
            title: "СОСТАВ",
            text: "В составе продукции — только натуральные компоненты"
        },
        {
            logo: Lab,
            title: "РАЗРАБОТКА ПРОДУКТОВ",
            text: "Уже разработано более 600 формул фитопрепаратов"
        },
        {
            logo: MagicWand,
            title: "КОСМЕТИЧЕСКИЙ УХОД",
            text: "Косметические линиии NSP- Natria, Tropical Mists, BREMANI CARE"
        },
        {
            logo: Eyedropper,
            title: "ДЕКОРАТИВНАЯ КОСМЕТИКА",
            text: "Декоративная косметика BREMANI делает людей красивыми и молодыми"
        },
        {
            logo: Gift,
            title: "БОНУСЫ",
            text: "Стать клиентом — значит получать бонусы и скидки"
        },
        {
            logo: Heart,
            title: "ЗДОРОВЬЕ",
            text: "Фитопрепараты и витамины позволяют продлить и улучшить качество жизни"
        },
    ]

    return (
        <div className="mt-16 px-10">
            <div className="text-4xl font-bold text-[#007f6e] text-center">
                Качество. Сервис. Надежность
            </div>
            <div className="flex">
                <img />
                <div className="grid grid-cols-2">
                    {qualityServiceReliabilityData.map((card) => {
                        return (
                            <div key={card.title} className="flex">
                                <img src={card.logo} alt={card.title} />
                                <div>
                                    <div className="text-[#007f6e]">{card.title}</div>
                                    <div className="text-[#777777]">{card.text}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default QualityServiceReliability;
