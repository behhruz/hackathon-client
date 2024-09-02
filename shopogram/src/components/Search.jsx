import React from "react";
import searchIcon from "../assets/searchIcon.png";
import place from "../assets/Place.png";
import search2 from "../assets/search2.svg"

const Search = () => {
    return (
        <>
            <div className=" bg-gray-300 h-[156px] w-screen flex justify-center items-center">
                <div className=" bg-white h-[72px] w-[1038px] flex justify-center items-center pl-6">
                    <img src={searchIcon} alt="" />
                    <input className=" w-[592px] h-[72px] rounded-[4px, 0px, 0px, 4px] outline-none placeholder:text-black bg-transparent pl-5" type="text" placeholder="Что ищете?" />
                    <img src={place} alt="" />
                    <input className=" outline-none placeholder:text-black bg-transparent h-72px pl-4 w-[296.72px]" type="text" placeholder="Вся страна" />
                    <button className=" btn bg-orange-600 text-white hover:bg-orange-400 rounded-none h-[72px] w-[146.41px]">Поиск<img src={search2} alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default Search;