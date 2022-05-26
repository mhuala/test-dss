import React from "react";
import { Link } from "react-router-dom";

export default function CityCard(props) {
    return (
        <button id={`t-${props.city}`} className="flex h-32 w-64 border border-white shadow-lg bg-center bg-cover">
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <Link to={props.city}>
                        <h1 className="text-lg font-semibold text-white uppercase lg:text-3xl tracking-widest hover:text-pink-500 hover:scale-105 transition transform duration-500 cursor-pointer">
                            {props.city}
                        </h1>
                    </Link>
                </div>
            </div>
        </button>
    );
}
