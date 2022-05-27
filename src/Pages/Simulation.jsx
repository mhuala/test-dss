import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import simulation from "../Images/assets/simulation.svg";
import axios from "axios";

const API = import.meta.env.VITE_API_ONLINE;

const sectors = [
    { name: "Silvoagropecuario" },
    { name: "Pesca" },
    { name: "Minería" },
    { name: "Alimentos,bebidas y tabaco" },
    { name: "Textil, vestir y cuero" },
    { name: "Madera y Muebles" },
    { name: "Papel e Imprentas" },
    { name: "Resto Industria" },
    { name: "Elect.,gas,agua" },
    { name: "Construcción" },
    { name: "Comercio, restaurantes y hoteles" },
    { name: "Transporte" },
    { name: "Comunicaciones" },
    { name: "Serv. financieros" },
    { name: "Educación" },
    { name: "Salud" },
    { name: "Resto de Servicios" },
];

export default function Simulation() {
    const [sectorSelected, setSectorSelected] = useState(sectors[0]);
    const [graphData, setGraphData] = useState(false);
    const [infoData, setInfoData] = useState([]);
    const [ammount, setAmmount] = useState();

    const submitURL = `${API}/api/simulation/done`;

    const handleSubmit = () => {
        setGraphData(false);
        let position_filtered = sectors.reduce(
            (acc, item, index) =>
                item.name === sectorSelected.name ? index : acc,
            []
        );
        {
            axios
                .post(submitURL, {
                    sector: sectorSelected.name,
                    position: position_filtered,
                    ammount: ammount,
                })
                .then((response) => {
                    setInfoData(response.data.data);
                    setGraphData(true);
                    console.log(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="flex flex-col min-w-full mx-auto bg-brand">
            <div className="grid grid-cols-1 md:grid-cols-6 px-10 bg-brand mt-36">
                {/* Contenido */}
                <div className="grid col-span-1 md:col-span-6 lg:col-span-3">
                    <div className="grid gap-8 items-start justify-center bg-brand">
                        <div className="relative">
                            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg blur-lg blur-opacity-25" />
                            <div className="relative flex justify-center items-center mx-auto">
                                <div className="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-brand space-y-10">
                                    {/* Texto */}
                                    <div className="text-xs uppercase font-mono text-white ">
                                        <span className="bg-green-800 rounded-lg p-1">
                                            SIMULA TU INVERSIÓN
                                        </span>
                                    </div>
                                    <div className="md:text-4xl text-xl font-semibold text-white font-fredoka">
                                        ¡ Escoge un sector productivo!
                                    </div>
                                    <div className="mt-4  text-gray-300 flex flex-col space-y-4">
                                        <span className="text-lg lg:text-xl font-athiti">
                                            Simula una variación en la demanda
                                            final de un sector economico en la
                                            región y observa su efecto
                                            desagregado en los otros sectores
                                            producto de los encadenamientos
                                            productivos, cuantificando las
                                            nuevas diferencias en sus demandas
                                            totales.
                                        </span>
                                        <a
                                            href="#"
                                            className="text-decoration text-blue-400"
                                        >
                                            → ¿Como se simula la inversión a
                                            nivel microterritorial?
                                        </a>
                                    </div>
                                    {/* Inputs */}
                                    <div className="z-20 flex flex-col w space-y-3">
                                        <div className="flex flex-col mx-auto md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:mx-auto">
                                            <Listbox
                                                value={sectorSelected}
                                                onChange={setSectorSelected}
                                                className="z-10"
                                            >
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-64 md:w-56 py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                        <span className="block truncate">
                                                            {
                                                                sectorSelected.name
                                                            }
                                                        </span>
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <SelectorIcon
                                                                className="w-5 h-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="absolute w-64 md:w-56 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {sectors.map(
                                                                (
                                                                    sector,
                                                                    sectorIdx
                                                                ) => (
                                                                    <Listbox.Option
                                                                        key={
                                                                            sectorIdx
                                                                        }
                                                                        className={({
                                                                            active,
                                                                        }) =>
                                                                            `${
                                                                                active
                                                                                    ? "text-indigo-900 bg-pink-300"
                                                                                    : "text-gray-900"
                                                                            }
                                            cursor-default select-none relative py-2 pl-10 pr-4`
                                                                        }
                                                                        value={
                                                                            sector
                                                                        }
                                                                    >
                                                                        {({
                                                                            selected,
                                                                            active,
                                                                        }) => (
                                                                            <>
                                                                                <span
                                                                                    className={`${
                                                                                        selected
                                                                                            ? "font-medium"
                                                                                            : "font-normal"
                                                                                    } block truncate`}
                                                                                >
                                                                                    {
                                                                                        sector.name
                                                                                    }
                                                                                </span>
                                                                                {selected ? (
                                                                                    <span
                                                                                        className={`${
                                                                                            active
                                                                                                ? "text-amber-600"
                                                                                                : "text-amber-600"
                                                                                        }
                                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                                    >
                                                                                        <CheckIcon
                                                                                            className="w-5 h-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                )
                                                            )}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </Listbox>
                                            <input
                                                type="text"
                                                className="w-64 md:w-48 rounded-xl p-1 text-center"
                                                placeholder="Monto (MM $)"
                                                value={ammount}
                                                onChange={(e) =>
                                                    setAmmount(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="z-0 grid gap-8 items-start justify-center">
                                        <Link
                                            to="simulation"
                                            spy={true}
                                            smooth={true}
                                        >
                                            <button
                                                onClick={handleSubmit}
                                                className=" font-mono px-7 py-4 bg-brand hover:bg-purple-900 rounded-lg leading-none flex items-center divide-x divide-gray-500 border border-1 border-rose-500"
                                            >
                                                <span className="flex items-center space-x-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 -rotate-45 text-pink-500"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                        />
                                                    </svg>
                                                    <span className="pr-6 text-gray-100">
                                                        ¿Quieres ver los
                                                        efectos?
                                                    </span>{" "}
                                                </span>
                                                <span className="pl-6 text-indigo-400">
                                                    {" "}
                                                    SIMULA!
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagen */}
                <img
                    src={simulation}
                    className="hidden lg:grid col-span-1 sm:col-span-3 md:h-4/5 ml-48 mt-4"
                />
            </div>
            <div id="simulation" className="h-24 md:h-10"></div>
            {/* Contenido */}
            {graphData && (
                <div className="grid gap-4 grid-cols 1 lg:grid-cols-6 px-6 ">
                    <div className="col-span-1 lg:col-span-2 px-10 bg-indigo-900 rounded-2xl">
                        <div className="py-6">
                            <span
                                id="simulation"
                                className="bg-amber-700 rounded-full py-2 px-4 text-white font-fredoka font-bold text-lg md:text-xl"
                            >
                                Simulación variación de demanda final:
                            </span>
                        </div>
                        <p className="text-white text-lg lg:text-xl font-athiti text-start">
                            En las siguientes tarjetas puedes ver el efecto
                            desencadenado que implicaría varíar la demanda final
                            del sector {sectorSelected.name} en ${ammount}{" "}
                            millones de pesos, observandose la diferencia en la
                            demanda final que provocaría además de que
                            porcentaje de la demanda final total del año 2020
                            representa esta variación. Esto es provocado por los
                            encadenamientos productivos del sector que indican
                            el nivel y tipo de interacción que existe entre los
                            sectores.
                        </p>

                        <div className="h-4"></div>
                        <p className="text-white text-lg lg:text-xl font-athiti text-start">
                            El cálculo de estas diferencias en la demanda final
                            se hace bajo la metodología de análisis de Matriz
                            Insumo-Producto calculando la multiplicación del
                            vector generado por esta nueva diferencia en la
                            demanda del sector {sectorSelected.name} con la
                            inversa de Leontief del 2020 (último año
                            disponible).
                        </p>
                        <div className="flex flex-col mt-4 py-4">
                            <a
                                href="#"
                                className="text-decoration text-blue-400"
                            >
                                → FIC-R en el cuál se calculó MIP 2017
                            </a>
                            <a
                                href="#"
                                className="text-decoration text-blue-400"
                            >
                                → Notebook que ejemplifica cómo se han trabajado
                                los datos
                            </a>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="col-span-1 lg:col-span-4 px-10">
                        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                            {infoData.map((sector) => (
                                <div>
                                    <div className="p-5 bg-white rounded shadow-sm">
                                        <div className="text-gray-400 text-md">
                                            {sector.x}
                                        </div>
                                        <div className="flex items-center pt-1 justify-between">
                                            <div className="text-2xl font-bold text-gray-900 ">
                                                ${sector.y.toFixed(4)}M
                                            </div>
                                            <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                                                <svg
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18 15L12 9L6 15"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span>
                                                    {(sector.z * 100).toFixed(
                                                        6
                                                    )}
                                                    %
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
