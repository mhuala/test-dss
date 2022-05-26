import React from "react";
import CityCard from "../Components/CityCard";

export default function Ciudades() {
    return (
        <div className="flex flex-col bg-brand py-20">
            <div className="flex flex-col mx-auto items-center justify-center ">
                <div className="flex flex-row ">
                    <img
                        src="https://es.datachile.io/images/icons/icon-search.svg"
                        alt=""
                        className="h-10 pr-3 rotate-45"
                    />
                    <h2 className="pl-3 text-white font-rale text-2xl">
                        BUSCA TU COMUNA DE INTERÉS
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 py-10">
            <CityCard city={"valdivia"} />
        <CityCard city={"lanco"} />
        <CityCard city={"mafil"} />
        <CityCard city={"lagoranco"} />
        <CityCard city={"launion"} />
        <CityCard city={"riobueno"} />
        <CityCard city={"panguipulli"} />
        <CityCard city={"futrono"} />
        <CityCard city={"corral"} />
        <CityCard city={"mariquina"} />
        <CityCard city={"paillaco"} />
        <CityCard city={"loslagos"} />
            </div>
            {/* <FooterWave /> */}
        </div>
    );
}
