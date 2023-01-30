import React from "react";

const DiscountForm = () => {
    return (
        <div className="my-16 px-10">
            <div className="text-4xl font-bold text-[#007f6e] text-center mb-10">
                Покупайте продукцию NSP со скидкой!
            </div>
            <div className="flex gap-16">
                <form className="w-1/2">
                    <input
                        className="w-full border-2 border-[#007f6e] rounded-2xl h-12 px-6 text-xl mb-4"
                        type="text"
                        placeholder="Ваше Имя и Фамилию"
                    />
                    <input
                        className="w-full border-2 border-[#007f6e] rounded-2xl h-12 px-6 text-xl mb-4"
                        type="number"
                        placeholder="Ваш номер телефона"
                    />
                    <input
                        className="w-full border-2 border-[#007f6e] rounded-2xl h-12 px-6 text-xl mb-4"
                        type="email"
                        placeholder="Ваш email"
                    />
                    <input
                        className="w-full border-2 border-[#007f6e] rounded-2xl h-12 px-6 text-xl mb-4"
                        type="text"
                        placeholder="Ваша страна, город, адрес"
                    />
                    <textarea
                        className="w-full border-2 border-[#007f6e] rounded-2xl h-52 px-6 py-2 text-xl mb-4"
                        placeholder="Ваши вопросы и предложения"
                    />
                    <button
                        className="w-full h-12 rounded-2xl bg-[#007f6e] uppercase text-white font-bold text-xl"
                        type="button"
                    >
                        Отправить запрос
                    </button>
                </form>
                <div className="w-1/2 text-xl">
                    <div className="mb-8">
                        Оформите дисконтную карту для приобретения продукции NSP
                        <span className="text-[#007f6e] font-bold px-1">с накопительной скидкой от 5% до 30%!</span>
                    </div>
                    <div className="mb-6">
                        Оформить дисконтную карту можно абсолютно
                        <span className="text-[#007f6e] font-bold px-1">бесплатно</span>
                        один из способов перечисленных ниже:
                    </div>
                    <nav>
                        <li className="mb-2">По номеру телефона <span className="font-bold px-1">+375 (29) 616-95-20</span> (Velcom, Viber)</li>
                        <li className="mb-2">Написать письмо в Телеграм <span className="font-bold pl-1">@EllaMatu</span></li>
                        <li className="mb-2">По номеру <span className="font-bold px-1">290</span> (номер сервисного центра для Беларуси)</li>
                        <li className="mb-2 hover:font-bold">
                            <a
                                className="text-[#007f6e]"
                                href="https://nsp25.com/signup.php?sid=7044463"
                            >
                                Оформить онлайн самостоятельно
                            </a>
                        </li>
                        <li className="mb-2">Заполнив форму на данном сайте</li>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DiscountForm;
