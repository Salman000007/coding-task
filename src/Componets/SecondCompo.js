import React from "react"


const SecondCompo = () => {
    const data = ["Anesthesia", "Cardiology", "Critical Care", "Dentistry", "Dermatology",
        "Diabetology",]
    return (
        <div className="flex mt-[1.5%]">
            <div className=" ml-[11%] w-[70%]">
                <p>Dear Doctor - Participate in this fun and exciting Quiz on diarrhea. \r\n\r\nDiarrhea is a condition in which the person experiences watery and loose stools more than three times in a day. It can be due to various reasons like food poisoning, viral infection, change in diet, etc. \r\n\r\nDiarrhea can lead to dehydration if not treated on time. Hence, it is important to know the causes and symptoms of diarrhea.</p>
            </div>
            <div >
                <button className="flex flex-wrap ml-[16%]">{data.map((item, index) => <ul className=" p-1 border border-gray-300 rounded-lg py-2 mx-2  hover:bg-cyan-100" key={index}>{item}</ul>)}</button>
            </div>
        </div>
    )
}

export default SecondCompo