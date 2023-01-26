import React from "react";

const DiscountForm = () => {
    return (
        <div className="mt-16 px-10">
            <div className="text-4xl font-bold text-[#007f6e] text-center mb-10">
                Покупайте продукцию NSP со скидкой!
            </div>
            <div className="flex">
                <form>
                    <div>
                        <input type="text" placeholder="Ваше Имя и Фамилию"/>
                    </div>
                    <div>
                        <input type="number" placeholder="Ваш номер телефона"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Ваш email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Ваша страна, город, адрес"/>
                    </div>
                    <div>
                        <textarea placeholder="Ваши вопросы и предложения"/>
                    </div>
                </form>
                <div>
                    <div>
                        Оформите дисконтную карту для приобретения продукции NSP <span> с накопительной скидкой от 5% до 30%! </span>
                    </div>
                    <div>
                        Оформить дисконтную карту можно абсолютно БЕСПЛАТНО один из способов перечисленных ниже:
                    </div>
                    <nav>
                        <li>По номеру телефона +375 (29) 616-95-20 (Velcom, Viber)</li>
                        <li>Написать письмо в Телеграм @EllaMatu</li>
                        <li>По номеру 290 (номер сервисного центра для Беларуси)</li>
                        <li>Заполнив форму на данном сайте</li>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DiscountForm;
