import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ChatBox from "../component/chat-box/chat-box";

const homeUpdate = () => {
    return(
        <div className="max-w-full ">
            <Navbar/>
         
         <div classname="grid grid-cols-1 lg:grid-cols-1 gap-2 border-b-2 border-gray-500 overflow-x-hidden mt-[5rem]"></div>
        </div>
    )
}