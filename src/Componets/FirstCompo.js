import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SecondCompo from "./SecondCompo";
const FirstCompo = () => {
    return (
        <>
            <div className="h-14 sm:h-16 md:h-20 w-full bg-cyan-50 text-center">
                <p className="font-bold text-xl sm:text-2xl md:text-3xl pt-[1%] sm:pt-[1.5%] md:pt-[2%]">Your one-stop Solution for <span className="text-cyan-400">MEDICAL LEARNING & UPDATES</span></p>
            </div>
            <div className="bg-blue-50 h-20 sm:h-20 md:h-24 w-full">
                <div className="flex justify-around">
                    <span className="font-bold text-2xl sm:text-3xl md:text-4xl pt-[1.6%] sm:pt-[2%] md:pt-[2.5%]">Get Knowledge Of the <span className="text-cyan-400">APPROVED DRUGS</span></span>
                    <div className="flex mt-[1.3%] sm:mt-[1.5%] md:mt-[2%] ">
                        <input className="w-48 sm:w-60 md:w-72 h-10 rounded-full text-center bg-blue-100" type="text" placeholder="Enter drug type" />
                        <FontAwesomeIcon className="ml-1 mt-[4%] sm:mt-[4.5%] md:mt-[5%] flex cursor-pointer" icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>


            <SecondCompo />

        </>
    )
}

export default FirstCompo;