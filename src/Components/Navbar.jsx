import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/assets/logo.svg";

export default function Navbar() {
    const [isClicked, setisClicked] = useState(false);

    return (
        <div className="container mx-auto px-2">
            <nav className="py-6 flex justify-between">
                {/* PRIMARY NAVBAR */}
                <div className="flex flex-row items-center mx-auto md:mx-0 px-8 md:justify-none">
                    <img src={logo} alt="asd" className=" h-16 w-16" />
                    <span className="text-5xl md:text-4xl bg-gradient-to-r text-transparent bg-clip-text from-red-400 to-yellow-400  font-mono ">
                        DLR
                    </span>
                </div>
                {/* SECONDARY NAVBAR */}
                <div className=" hidden md:flex flex-row justify-center items-center space-x-8">
                    {/* First section */}
                    <div className="flex flex-row items-center space-x-8">
                        <Link to="/" className="clickeable">
                            <span className="text-white font-bold font-rale">
                                Inicio
                            </span>
                        </Link>
                        <Link to="/region" className="clickeable">
                            <span className="text-white font-bold font-rale">
                                Región
                            </span>
                        </Link>
                        <Link to="/cities" className="clickeable">
                            <span className="text-white font-bold font-rale">
                                Ciudades
                            </span>
                        </Link>
                        <Link to="/exportations" className="clickeable">
                            <span className="text-white font-bold font-rale">
                                Exportaciones
                            </span>
                        </Link>
                    </div>
                    {/* Secondary Section */}
                    <div className="w-0.5 h-6 bg-gray-400 opacity-50"></div>
                    <button className="transform hover:-translate-y-2 transition-transform duration-500 ease-in-out bg-gradient-to-r from-indigo-500 to-indigo-900 hover:bg-blue-600 rounded-xl px-4 py-2">
                        <Link
                            to="/simulation"
                            className="text-white flex items-center space-x-2"
                        >
                            <span className="font-rale">Simulación</span>
                            <i className="fa fa-flask" aria-hidden="true"></i>
                        </Link>
                    </button>
                </div>
                {/* MOBILE BUTTON */}
                <div className="items-center md:hidden mr-10 ">
                    <button
                        onClick={() => setisClicked(!isClicked)}
                        className="h-24 text-white"
                    >
                        <i className="fas fa-bars fa-xl" />
                    </button>
                </div>
            </nav>
            {/* MOBILE MENU */}
            <div
                className={
                    isClicked
                        ? "flex flex-col md:hidden space-y-1 bg-gradient-to-b from-brand to-indigo-900 text-white text-xl bg-brand w-full -mt-10 rounded-b-xl"
                        : "hidden"
                }
            >
                <Link
                    to="/home"
                    className="clickeable text-center  block mx-auto w-11/12"
                >
                    <span className="text-center font-semibold">Inicio</span>
                </Link>
                <Link
                    to="/region"
                    className="clickeable text-center  block mx-auto w-11/12"
                >
                    <span className="text-center font-semibold">Región</span>
                </Link>
                <Link
                    to="/cities"
                    className="clickeable text-center  block mx-auto w-11/12"
                >
                    <span className="text-center font-semibold">Ciudades</span>
                </Link>
                <Link
                    to="/exportations"
                    className="clickeable text-center  block mx-auto w-11/12"
                >
                    <span className="text-center font-semibold">
                        Exportaciones
                    </span>
                </Link>
                <Link
                    to="/simulation"
                    className="clickeable text-center  block mx-auto w-11/12 "
                >
                    <span className="text-center font-semibold py-1">
                        Simulación
                    </span>
                </Link>
            </div>
        </div>
    );
}
