import React, { Fragment } from "react";
import SVGRegion from "./SVGRegion";
import TerrainType from "./TerrainType";

export default function Content() {
  return (
    <Fragment>
      <div className="flex flex-col bg-brand max-w-8xl">
        <div className="h-4 md:h-10"></div>
        <div className=" px-10 space-y-10">
          {/* DESCRIPCION USO DE SUELo */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 items-center py-20 rounded-xl p-4">
            <div className="col-span-1 lg:col-span-4 text-center font-semibold text-gray-200 mb-14 font-rale"></div>
            {/* SVG Container */}
            <div className="col-span-4 xl:col-span-2 px-4 text-center">
              <span className="md:text-5xl text-3xl text-white font-fredoka uppercase">
                Vocaciones productivas
              </span>
              <div className="border-b border-1 border-pink-500 w-full mx-auto mt-5"></div>
              <div className="text-xl text-start font-athiti py-10 text-gray-300 text-start">
                La propuesta de Vocaciones Productivas es de carácter
                orientativo y se elaboró en base a la recopilación y análisis de
                información cuantitativa y cualitativa, tanto primaria como
                secundaria. Se consideraron datos del SII relativos a empleo
                formal, los resultados de la MIP de la Región de Los Ríos, y
                cruces de información que permiten visualizar complejidades del
                entramado productivo regional y comunal tales como los Pladecos,
                que explicitan cada cierto período de tiempo la estructura y
                dinámica en la cual se desarrollarán los territorios que
                componen la Región de Los Ríos, los usos preferentes de suelo a
                nivel de comunas e información primaria obtenida en el proceso
                de formulación de escala comunal y opinión experta.
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl col-span-1 lg text-center">
                <div className="col-span-3">
                  <div class="flex flex-col justify-center items-center text-white ">
                    <div class="flex flex-wrap justify-center">
                      <TerrainType type="Agropecuario" />
                      <TerrainType type="Forestal" />
                      <TerrainType type="Ind. Alimentaria" />
                      <TerrainType type="Agrícola" />
                      <TerrainType type="Frutícola" />
                      <TerrainType type="Pecuario" />
                      <TerrainType type="Silvoagropecuario" />
                      <TerrainType type="Ind. Forestal" />
                      <TerrainType type="Pesca" />
                      <TerrainType type="Ind. Pesquera" />
                      <TerrainType type="Ind. Láctea" />
                      <TerrainType type="Acuicultura (peq)" />
                      <TerrainType type="Ind. Apícola" />
                      <TerrainType type="Construcción" />
                      <TerrainType type="Const. Naval" />
                      <TerrainType type="Serv. Salud" />
                      <TerrainType type="Ind. Creativas" />
                      <TerrainType type="Edu. Terciaria" />
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="col-span-3 text-decoration text-sm text-blue-300 p-1 mt-2"
                >
                  → Fuente : Politica de Fomento Regional 2020-2026{" "}
                </a>
              </div>
            </div>
            {/* GRAFICO */}
            <div className="col-span-4 xl:col-span-2 mt-14 xl:mt-0 flex">
              <SVGRegion />
            </div>
          </div>
          {/* 
            GRAFO ?
          */}
        </div>
      </div>
    </Fragment>
  );
}
