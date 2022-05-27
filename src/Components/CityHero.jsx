import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-scroll";
import people from "../Images/assets/people.png";
import police from "../Images/assets/police.png";
import supermarket from "../Images/assets/shopping.png";

const API = import.meta.env.VITE_API_ONLINE;

export default function CityHero(props) {
  const [councilors, setCouncilors] = useState([]);
  const [mayor, setMayor] = useState([]);
  const requestURL = `${API}/api/cities/politicians/test12`;

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      setMayor([
        res.data.politicians.mayor.name,
        res.data.politicians.mayor.image,
      ]);
      let l = [];
      Object.entries(res.data.politicians.councilors).forEach(
        ([key, value]) => {
          l.push([value.name, value.image]);
        }
      );
      setCouncilors(l);
    });
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
        {/*- OVERLAY -*/}
        <div
          id={`f-${props.city}`}
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"></div>
        <div className="relative min-h-screen min-w-full">
          {/*- CONTENIDO -*/}
          <div className="flex flex-col min-h-screen justify-center items-center space-y-24 text-white">
            {/*- Indicadores principales -*/}
            <div class="w-5xl group ">
              <div className="opacity-0 transform group-hover:opacity-100 group-hover:-translate-y-5 transition ease-in-out duration-700 absolute inset-x-0 top-10 flex justify-center ">
                <div className="flex mx-auto items-center">
                  <div className>
                    <div className="flex space-x-8">
                      <div className="flex flex-col items-center">
                        <img src={people} className="h-12 w-12" />
                        <h2 className="text-gray-300 text-xs md:text-md font-rale uppercase">
                          población
                        </h2>
                        <span className="text-blue-500 mt-2 py-1 px-2 font-sans text-sm bg-white rounded-2xl">
                          xxx.xxx hab
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src={supermarket} className="h-12 w-12" />
                        <h2 className="text-gray-300 text-xs md:text-md font-rale uppercase">
                          ventas uf
                        </h2>
                        <span className="text-blue-500 mt-2 py-1 px-2 font-sans text-sm bg-white rounded-2xl">
                          xxx.xxx uf
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src={police} className="h-12 w-12" />
                        <h2 className="text-gray-300 text-xs md:text-md font-rale uppercase">
                          denuncias
                        </h2>
                        <span className="text-blue-500 mt-2 py-1 px-2 font-sans text-sm bg-white rounded-2xl">
                          xxx.xxx
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl sm:text-6xl md:text-8xl font-fredaka text-center mt-40 uppercase bg-gradient-to-t text-transparent bg-clip-text from-white to-gray-500">
                {props.city}
              </h2>
            </div>
            {/*- Autoridades -*/}
            <div class="flex flex-col justify-center items-center text-white max-w-7xl ">
              <div class="flex flex-wrap justify-center max-w-5/6">
                {/* Alcalde */}
                <div class="flex p-4 ml-5 md:p-10">
                  <div class="w-full flex items-center justify-center bg-transparent">
                    <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-gradient-to-r from-teal-700 to-teal-900 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                      <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                        <div class="rounded-full bg-black w-16 sm:w-18 md:w-20 overflow-auto">
                          <img src={mayor[1]} className="w-20 h-20" />
                        </div>
                      </div>
                      <div class="flex flex-col space-y-2 md:space-y-4">
                        <label class="absolute font-bold text-gray-100 text-md text-start top-1 left-8 sm:left-10">
                          {mayor[0]}
                        </label>
                        <p class="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8  sm:left-10">
                          Alcaldesa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Concejales */}
                {councilors.map((councilor, councilorIdx) => (
                  <Fragment>
                    <div class="flex p-4 ml-5 md:p-10">
                      <div class="w-full flex items-center justify-center bg-transparent">
                        <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                          <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                            <div class="rounded-full bg-black w-16 sm:w-18 md:w-20 overflow-auto">
                              <img src={councilor[1]} className="w-20 h-20" />
                            </div>
                          </div>
                          <div class="flex flex-col space-y-2 md:space-y-4">
                            <label class="absolute font-bold text-gray-100 text-md text-start top-1 left-8 sm:left-10">
                              {councilor[0]}
                            </label>
                            <p class="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8  sm:left-10">
                              Concejal
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex p-4 ml-5 md:-10">
                  <div className="w-full flex items-center justify-center bg-transparent">
                    <div className="relative w-64 h-20 bg-gradient-to-r from-purple-700 to-purple-900 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center border border-purple-500">
                      <div className="absolute rounded-full bg-transparent w-28 h-28 p-2 z-10 -top-2 -left-14 transition ">
                        <div className="rounded-full bg-black w-full h-full overflow-auto">
                          <img src={councilor[1]} className="w-24 h-24" />
                        </div>         
                      </div>
                      <div className="flex flex-col pl-4">
                        <label className="font-bold text-gray-100 text-md">
                          {councilor[0]}
                        </label>
                        <p className="text-gray-200 text-sm mt-1 leading-relaxed">
                          Concejal
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  </Fragment>
                ))}
              </div>
              <div className="flex max-w-7xl justify-center items-center mx-auto space-x-4 py-10">
                <Link
                  to="commerce_economy"
                  spy={true}
                  smooth={true}
                  className="h-64 flex items-center self-center justify-center"
                >
                  <button className="flex flex-col items-center mx-auto hover:scale-125 transition transform duration-250 cursor-pointer text-gray-400 hover:text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={1}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="uppercase text-sm font-light">
                      Economía{" "}
                    </span>
                  </button>
                </Link>
                <Link
                  to="construction"
                  spy={true}
                  smooth={true}
                  className="hover:scale-125 transition transform duration-250 cursor-pointer text-gray-400 hover:text-pink-500"
                >
                  <button className="flex flex-col items-center mx-auto ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="uppercase text-sm font-light">
                      construcción
                    </span>
                  </button>
                </Link>
                <Link to="transport_communication" spy={true} smooth={true}>
                  <button className="flex flex-col items-center self-center mx-auto hover:scale-125 transition transform duration-250 cursor-pointer text-gray-400 hover:text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={1}
                        d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                    <span className="uppercase text-sm font-light">
                      trans. y Coms.
                    </span>
                  </button>
                </Link>
                <Link to="investment" spy={true} smooth={true}>
                  <button className="flex flex-col items-center mx-auto hover:scale-125 transition transform duration-250 cursor-pointer text-gray-400 hover:text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={1}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="uppercase text-sm font-light">
                      inversión
                    </span>
                  </button>
                </Link>
                <Link to="security" spy={true} smooth={true}>
                  <button className="flex flex-col items-center mx-auto hover:scale-125 transition transform duration-250 cursor-pointer text-gray-400 hover:text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={1}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                    <span className="uppercase text-sm font-light">
                      seguridad
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            {/*- Botones fondo -*/}
          </div>
        </div>
      </div>
    </div>
  );
}
