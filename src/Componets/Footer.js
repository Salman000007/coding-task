import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
// import { faFolder } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const Footer = () => {
    return (
        <div>
        <div className="h-auto w-full bg-navy flex">
            <div className="p-[2%] ">
                <img className="mb-[1.5%] p-[1%] cursor-pointer" src="https://hidoc.co/assets/img/logo/logo3.png" alt="logo" />
                <p className="text-white ml-[1%] mt-[5%]">Fastest Growing Medical Platform for<span className="block">Doctors.</span></p>
                <FontAwesomeIcon className="text-white  m-2 h-7 cursor-pointer" icon={faFacebook} />
                <FontAwesomeIcon className=" text-white border-white  m-2 h-7 cursor-pointer" icon={faInstagram} />
                <FontAwesomeIcon className=" text-white border-white  m-2 h-7 cursor-pointer" icon={faYoutube} />
                <FontAwesomeIcon className=" text-white border-white  m-2 h-7 cursor-pointer " icon={faLinkedin} />
            </div>
            <div className="p-[1.5%] ml-[5%]">
                <h5 className="text-white">REACH US</h5>
                <div>
                    <p className="text-white w-[50%]">Please contact below details for any other information.</p>
                    <p className="text-white"><span className="text-cyan-300 block">Email:</span>info@hidoc.co</p>
                    <p className="text-white w-[50%]"><span className="text-cyan-300 block">Address:</span> Hidoc Dr.Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States</p>
                </div>
            </div>
            <div className="h-7 mr-[15%] p-2 mt-[0.5%]">
                <h4 className="text-white mb-3">Hindoc DR. FEATURE</h4>
                <div className="flex">
                    <img className="h-28 cursor-pointer" src="https://hidoc.co/assets/img/portfolio/1.jpg" alt="img1" />
                    <img className="h-28 cursor-pointer" src="https://hidoc.co/assets/img/portfolio/2.jpg" alt="img2" />
                    <img className="h-28 cursor-pointer" src="https://hidoc.co/assets/img/portfolio/3.jpg" alt="img3" />
                </div>
                <div className="flex">
                    <img className="h-28 cursor-pointer" src="https://hidoc.co/assets/img/portfolio/5.jpg" alt="img4" />
                    <img className="h-28 cursor-pointer" src="https://hidoc.co/assets/img/portfolio/6.jpg" alt="img5" />
                    <img className="h-28 cursor-pointer" src="https://hidoc.co/assets/img/portfolio/4.jpg" alt="img6" />
                </div>
            </div>
            
        </div>
        <div className="h-12 bg-gray-400 text-center pt-2">
            <p className="text-sm"><span className="block">© Copyright 2022 Infedis Infotech LLP.</span>Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;