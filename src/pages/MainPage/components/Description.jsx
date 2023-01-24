import React from "react";

import NSP from "../assets/NSP.png"

const Description = () => {
    return (
        <div className="flex justify-between items-center mt-8 px-10">
            <img className="max-w-xl" src={NSP} alt="NSP"/>
            <div className="max-w-xl">
                <div className="text-4xl font-bold text-[#007f6e] mb-4"> Что такое NSP</div>
                <div className="mb-5 text-[#777777]">
                    NSP — крупная международная компания, выпускающая экологически чистые биологические добавки,
                    витамины, натуральную косметику и моющие средства для дома. За долгие годы существования компания успела
                    прославиться по всему миру и сегодня имеет официальные представительства в более чем 50 странах
                    мира.
                </div>
                <div className="text-[#777777]">
                    Ассортимент компании насчитывает более чем 500 наименований продукции. Все позиции проходят
                    строжайший контроль качества из более чем 20 тестов на каждом этапе производства. Продукция полностью
                    соответствует всем существующим стандартам FDA и TGA.
                </div>
            </div>
        </div>
    );
};

export default Description;
