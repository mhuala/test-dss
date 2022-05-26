import { React, useState, useEffect } from "react";
import NetworkGraph from "../Components/NetworkGraph";
import data from "../Data/exportations.json";

export default function Exportations() {
  const [activeYear, setActiveYear] = useState(2010);
  const [initialPink, setInitialPink] = useState(true);

  return (
    <div>
      <div className="flex flex-col bg-brand p-3 md:p-24">
        {/*- CHART MENU -*/}
        <div className="flex-col md:flex md:flex-row">
          <div className="flex text-white bg-purple-900  rounded-tl-2xl rounded-tr-2xl ">
            <div className="flex flex-wrap pl-8 md:pl-0 py-4 font-bold">
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => setActiveYear(2010)}
              >
                <h2
                  class={
                    initialPink
                      ? "font-bold px-4 py-1 text-lg text-pink-600"
                      : "font-bold px-4 py-1 text-lg"
                  }
                >
                  2010
                </h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2011);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2011</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2012);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2012</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2013);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2013</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2014);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2014</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2015);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2015</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2016);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2016</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2017);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2017</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2018);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2018</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2019);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2019</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2020);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2020</h2>
              </button>
              <button
                className="flex active:text-pink-600 focus:text-pink-600"
                onClick={() => {
                  setActiveYear(2021);
                  setInitialPink(false);
                }}
              >
                <h2 class="font-bold px-4 py-1 text-lg">2021</h2>
              </button>
            </div>
          </div>
        </div>
        {/*- GRID -*/}
        <div className="grid flex-col lg:grid-cols-4 bg-indigo-900 lg:rounded-tr-2xl lg:rounded-br-2xl  lg:rounded-bl-2xl">
          {/*- NodeGraph  MD+ Screns-*/}
          <div className="hidden lg:block lg:col-span-2">
            {activeYear === 2010 && (
              <NetworkGraph
                data={data[2010]["data"]}
                nodes={data[2010]["nodes"]}
                year={"2010"}
              />
            )}
            {activeYear === 2011 && (
              <NetworkGraph
                data={data[2011]["data"]}
                nodes={data[2011]["nodes"]}
                year={"2011"}
              />
            )}
            {activeYear === 2012 && (
              <NetworkGraph
                data={data[2012]["data"]}
                nodes={data[2012]["nodes"]}
                year={"2012"}
              />
            )}
            {activeYear === 2013 && (
              <NetworkGraph
                data={data[2013]["data"]}
                nodes={data[2013]["nodes"]}
                year={"2013"}
              />
            )}
            {activeYear === 2014 && (
              <NetworkGraph
                data={data[2014]["data"]}
                nodes={data[2014]["nodes"]}
                year={"2014"}
              />
            )}
            {activeYear === 2015 && (
              <NetworkGraph
                data={data[2015]["data"]}
                nodes={data[2015]["nodes"]}
                year={"2015"}
              />
            )}
            {activeYear === 2016 && (
              <NetworkGraph
                data={data[2016]["data"]}
                nodes={data[2016]["nodes"]}
                year={"2016"}
              />
            )}
            {activeYear === 2017 && (
              <NetworkGraph
                data={data[2017]["data"]}
                nodes={data[2017]["nodes"]}
                year={"2017"}
              />
            )}
            {activeYear === 2018 && (
              <NetworkGraph
                data={data[2018]["data"]}
                nodes={data[2018]["nodes"]}
                year={"2018"}
              />
            )}
            {activeYear === 2019 && (
              <NetworkGraph
                data={data[2019]["data"]}
                nodes={data[2019]["nodes"]}
                year={"2019"}
              />
            )}
            {activeYear === 2020 && (
              <NetworkGraph
                data={data[2020]["data"]}
                nodes={data[2020]["nodes"]}
                year={"2020"}
              />
            )}
            {activeYear === 2021 && (
              <NetworkGraph
                data={data[2021]["data"]}
                nodes={data[2021]["nodes"]}
                year={"2021"}
              />
            )}
          </div>
          {/*- Info Card -*/}
          <div className="flex-col lg:col-span-2 lg:p-5 p-2 space-y-3 text-white">
            {/*- Tittle -*/}
            <div className="text-white text-xl font-rale   ml-6 mt-6 flex w-auto">
              <span className="bg-amber-700 rounded-full py-2 px-4 font-fredoka font-bold text-lg md:text-xl">
                Exportaciones Los Ríos
              </span>
            </div>
            {/*- Content -*/}
            <h2 className="text-lg lg:text-xl font-athiti px-8">
              La cantidad de tipos de articulos exportados por la Región de Los
              Ríos, se ha ido expandiendo con el paso de los años, lo cual es
              visible en los gráficos de redes, en donde cada pequeño nodo
              representa un tipo de articulo y su color representa su índice de
              RCAe, simbolizando con verde aquellos que posee un RCAe mayor a 1
              y con rojo a los que no.
            </h2>
            <div className="flex flex-col px-10 mb-12">
              <a href="#" className="text-decoration text-blue-400">
                → Fuente de datos: Repositorio público <i>datos.gob.cl</i>
              </a>
              <a href="#" className="text-decoration text-blue-400">
                → Notebook que ejemplifica cómo se han trabajado los datos
              </a>
              <a href="#" className="text-decoration text-blue-400">
                → Secciones de Código Arancelario Vigente
              </a>
              <a href="#" className="text-decoration text-blue-400">
                → Diccionario de Códigos arancelarios
              </a>
            </div>
            {/*- Data summary -*/}
            <div className="flex-col space-y-4 text-white  ml-6 py-5">
              <span className="bg-amber-700 rounded-full py-2 px-4 font-fredoka font-bold text-lg md:text-xl">
                Secciones relevantes de la Región
              </span>
              <h2 className="text-lg lg:text-xl font-athiti px-2">
                Dentro de las secciones con más tipos de exportaciones las más
                destacadas son la N°1, N°2, N°4, N°9 y N°16.
              </h2>
            </div>
            <div className="flex justify-between px-10 py-4">
              <div className="flex-col">
                <img
                  src="https://via.placeholder.com/48"
                  alt=""
                  className="mx-auto"
                />
                <h2 className="text-sm font-light text-center">
                  Productos de origen animal
                </h2>
              </div>
              <div className="flex-col">
                <img
                  src="https://via.placeholder.com/48"
                  alt=""
                  className="mx-auto"
                />
                <h2 className="text-sm font-light text-center">
                  Productos de origen vegetal
                </h2>
              </div>
              <div className="flex-col">
                <img
                  src="https://via.placeholder.com/48"
                  alt=""
                  className="mx-auto"
                />
                <h2 className="text-sm font-light text-center">
                  Bebidas y liquidos alcoholicos
                </h2>
              </div>
              <div className="flex-col">
                <img
                  src="https://via.placeholder.com/48"
                  alt=""
                  className="mx-auto"
                />
                <h2 className="text-sm font-light text-center">
                  Productos sector forestales
                </h2>
              </div>
              <div className="flex-col">
                <img
                  src="https://via.placeholder.com/48"
                  alt=""
                  className="mx-auto"
                />
                <h2 className="text-sm font-light text-center">
                  Equipo Audiovisual
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/*- NodeGraph  Small Screns-*/}
        <div className="block lg:hidden">
          {activeYear === 2010 && (
            <NetworkGraph
              data={data[2010]["data"]}
              nodes={data[2010]["nodes"]}
              year={"2010"}
            />
          )}
          {activeYear === 2011 && (
            <NetworkGraph
              data={data[2011]["data"]}
              nodes={data[2011]["nodes"]}
              year={"2011"}
            />
          )}
          {activeYear === 2012 && (
            <NetworkGraph
              data={data[2012]["data"]}
              nodes={data[2012]["nodes"]}
              year={"2012"}
            />
          )}
          {activeYear === 2013 && (
            <NetworkGraph
              data={data[2013]["data"]}
              nodes={data[2013]["nodes"]}
              year={"2013"}
            />
          )}
          {activeYear === 2014 && (
            <NetworkGraph
              data={data[2014]["data"]}
              nodes={data[2014]["nodes"]}
              year={"2014"}
            />
          )}
          {activeYear === 2015 && (
            <NetworkGraph
              data={data[2015]["data"]}
              nodes={data[2015]["nodes"]}
              year={"2015"}
            />
          )}
          {activeYear === 2016 && (
            <NetworkGraph
              data={data[2016]["data"]}
              nodes={data[2016]["nodes"]}
              year={"2016"}
            />
          )}
          {activeYear === 2017 && (
            <NetworkGraph
              data={data[2017]["data"]}
              nodes={data[2017]["nodes"]}
              year={"2017"}
            />
          )}
          {activeYear === 2018 && (
            <NetworkGraph
              data={data[2018]["data"]}
              nodes={data[2018]["nodes"]}
              year={"2018"}
            />
          )}
          {activeYear === 2019 && (
            <NetworkGraph
              data={data[2019]["data"]}
              nodes={data[2019]["nodes"]}
              year={"2019"}
            />
          )}
          {activeYear === 2020 && (
            <NetworkGraph
              data={data[2020]["data"]}
              nodes={data[2020]["nodes"]}
              year={"2020"}
            />
          )}
          {activeYear === 2021 && (
            <NetworkGraph
              data={data[2021]["data"]}
              nodes={data[2021]["nodes"]}
              year={"2021"}
            />
          )}
        </div>
        {/* <ExportationsGraphs /> */}
        {/* {graph1.series && (
          <div className="text-white text-2xl"> HOLA </div>

          // <ReactApexChart
          //   options={bar_h_series.options}
          //   series={bar_h_series.series}
          //   type="bar"
          //   width="100%"
          //   height="100%"
          // />
        )} */}
      </div>
    </div>
  );
}
