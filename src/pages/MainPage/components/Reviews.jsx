import React from "react";

import useMainReviews from "../../../hooks/useMainReviews";

import ArrowLeft from "../assets/svg/left.svg";
import ArrowRight from "../assets/svg/right.svg";

const Reviews = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const reviewsData = useMainReviews();

    return (
        <div className="mt-16 px-10 py-8 bg-[#77777717]">
            <div className="text-4xl font-bold text-[#007f6e] text-center mb-10">
                Отзывы наших клиентов
            </div>
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={() => {
                        setActiveSlide(activeSlide <= 0 ? reviewsData.length - 1 : activeSlide - 1)
                    }}
                >
                    <img src={ArrowLeft} alt="arrow" />
                </button>

                <div className="w-11/12">
                    <div className="font-bold text-[#007f6e] mb-5 text-lg">
                        {reviewsData[activeSlide].name}
                    </div>
                    <div className="text-sm text-[#777777] h-[360px]">
                        {reviewsData[activeSlide].text}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setActiveSlide(activeSlide >= reviewsData.length - 1 ? 0 : activeSlide + 1)
                    }}
                >
                    <img src={ArrowRight} alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default Reviews;
