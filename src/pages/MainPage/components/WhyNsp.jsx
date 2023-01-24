import React from "react";

import Why from "../assets/Why.jpg"

const WhyNsp = () => {
    return (
        <div className="flex justify-between items-center mt-16 px-10">
            <div className="max-w-xl">
                <div className="text-4xl font-bold text-[#007f6e] mb-4"> Почему миллионы людей доверяют NSP</div>
                <div className="mb-5 text-[#777777]">
                    Мы считаем, что хорошее здоровье и благополучие способны изменить жизнь людей. И благодаря нашим
                    продуктам, нашим сотрудникам и нашим деловым возможностям мы работаем над тем, чтобы сделать это
                    реальностью каждый день.
                </div>
                <div className="mb-5 text-[#777777]">
                    Сегодня в мире слишком много сомнительных товаров и пустых обещаний. Nature’s Sunshine — это
                    проверенный выбор для людей, которые ищут, как сохранить и приумножить здоровье в долгой
                    перспективе.
                </div>
                <div className="text-[#777777]">
                    Поэтому, хотя преобразование является смелым обещанием, мы делаем это с уверенностью. Nature’s
                    Sunshine приносит здоровье и благополучие миллионам клиентов каждый день. И когда люди становятся
                    здоровее, жизнь действительно преображается.
                </div>
            </div>
            <img className="max-w-xl rounded-xl" src={Why} alt="Why"/>
        </div>
    );
};

export default WhyNsp;