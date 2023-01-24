import React from "react";

import CreditCard from "../assets/svg/credit-card.svg";
import Earth from "../assets/svg/earth.svg";
import Leaf from "../assets/svg/leaf.svg";
import Sun from "../assets/svg/sun.svg";
import Trophy from "../assets/svg/trophy.svg";

const Advantages = () => {
    const advantagesData = [
        {
            logo: Earth,
            text: "NSP –всемирно известная компания, имеющая огромный опыт в производстве биодобавок. На протяжении полувека, начиная с 1972 года, благодаря регулярному приему наших фито и витаминно-минеральных комплексов люди год от года становятся здоровее, бескомпромиссно изменив качество своей жизни в лучшую сторону."
        },
        {
            logo: Sun,
            text: "Концепция Nature’s Sunshine Products (это полное название компании, которое буквально переводится как “Натуральные Солнечные Продукты”) направлена на создание максимально эффективных формул фитопродукции. На данный момент их насчитывается около 600. Все они легко усваиваются организмом и комфортны в применении."
        },
        {
            logo: Leaf,
            text: "В своем производстве компания использует только экологически чистое и качественное сырье, а также внедряет новейшие передовые научные разработки и технологии. Благодаря собственной лаборатории в штате Юта в Америке и взаимодействию с лучшими учёными мира уровень внутренних стандартов качества сырья и технологий производства NSP реально опережает мировой."
        },
        {
            logo: CreditCard,
            text: "Ценовая политика компании NSP направлена на возможность приобретения продукции всеми слоями населения, чтобы любой человек имел возможность здорового питания."
        },
        {
            logo: Trophy,
            text: "Для каждого клиента компании существует система скидок и вознаграждений,а также возможность взаимовыгодного сотрудничества и построения бизнеса."
        },
    ]

    return (
        <div className="mt-16 px-10 py-8 bg-[#77777717]">
            <div className="text-4xl font-bold text-[#007f6e] text-center">
                Пять преимуществ компании NSP
            </div>
            <div className="flex flex-wrap justify-center">
                {advantagesData.map((benefit) => {
                    return (
                        <div key={benefit.logo} className="max-w-sm flex flex-col items-center px-3.5">
                            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#007f6e] mt-10 mb-3.5">
                                <img className="w-10" src={benefit.logo} alt="logo" />
                            </div>
                            <div className="text-[#777777] text-center">{benefit.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Advantages;
