import React from "react";
import Logo from "../assets/Logo.png";
import shopogram from "../assets/Shopogram.png";
import Document from "../assets/Document.png";
import Search from "../assets/Search.png";

const Bottom = () => {
    return (
        <>
            <div>
                <div className=" h-[130px] w-screen bg-orange-600 flex gap-[64px] items-center justify-center">
                    <img src={Logo} alt="" />
                    <div>
                        <p className=" font-extralight text-[15.75px] text-gray-300">Посмотрите предложение Shopogram для бизнеса</p>
                        <p className=" font-semibold text-[19.38px] text-white">Начните бизнес в интернете с Shopogram!</p>
                    </div>
                    <button className=" bg-white text-black rounded-[4px] h-11 w-[132.14px] ml-[85.28px] font-semibold text-[13.67px] btn">Подробнее</button>
                </div>
                <div className=" bg-[#ffb13b] w-screen h-[427px] flex flex-col items-center gap-[45px]">
                    <img className=" w-48" src={shopogram} alt="" />
                    <p className=" font-normal text-[13.34px] w-[809.95px] h-[138px] text-center">Cервис объявлений № 1 в Узбекистане Частные объявления Узбекистана на Shopogram бывший torg.uz - здесь вы найдете то, что искали. Нажав на кнопку "Подать объявление", вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое. С помощью сервиса Shopogram в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики. Shopogram в Узбекистане - ваш надежный и незаменимый помощник.</p>
                </div>
                <div className=" flex justify-center pt-[62px] gap-[43px]">
                    <div>
                        <img src={Document} alt="" />
                        <div className=" flex w-[525px]">
                            <p className=" text-[15.5px] font-extralight text-wrap"><p className=" font-semibold text-[15.13px] text-nowrap">Разделы на сервисе Shopogram:</p>Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и Сад, Елекроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт, Отдам даром, Обмен</p>
                        </div>
                    </div>
                    <div>
                        <img src={Search} alt="" />
                        <div className=" flex w-[555px]">
                            <p className=" text-[15.5px] font-extralight"><p className=" font-semibold text-[15.13px]">Популярные запросы:</p>кондиционер, Iphone 11, Kunlik, Kunlik Ish, Ayollar, увлажнитель, Kunlik, Konditsioner, дача, Ish, Onix, Ijaraga, кондиционер, Gentra, Cobalt, Matiz, Dacha, Kvartira, Damas, Jentra</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bottom;