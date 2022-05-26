import React, { Fragment } from "react";
import hero from "../Images/assets/hero.svg";

export default function HomeContent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-6 px-10 py-14">
      {/* Top Text */}
      <div className="text-white grid col-span-1 xl:col-span-3">
        <div className="ml-2 p-3 flex flex-col justify-center max-w-4xl rounded bg-brand space-y-10">
          {/* CONTENIDO */}
          <div className="text-3xl md:text-4xl lg:text-6xl  font-bold font-fredoka text-white leading-snug bg-gradient-to-l from-indigo-900 to-transparent py-2 inline px-8 md:px-12 decoration-clone rounded-full">
            Qué es Data Los Ríos?
          </div>
          <div className="mt-4 text-gray-400 text-lg px-8 md:px-14 md:text-2xl font-athiti font-extrabold">
            Esta iniciativa de visualización de datos como sistema de soporte a
            la toma de decisiones (DSS en inglés), es una iniciativa
            complementaria a la Politica Regional de Fomento que comprende el
            periodo 2021-2026. Con esta herramienta se busca concentrar
            información para el uso del público general y principalmente para
            inversores, los que finalmente pueden observar la estructura
            economica y productiva de las comunas pudiendo incluso simular los
            efectos desagregados de una diferencia en la demanda total de algún
            sector productivo de la región.
          </div>
        </div>
      </div>
      {/* Right Image */}
      <img
        src={hero}
        className="grid col-span-1 xl:col-span-3 px-4 sm:px-20 md:px-48 xl:px-0 xl:mt-20"
      />
      {/* BLUR BUTTON */}
    </div>
  );
}
