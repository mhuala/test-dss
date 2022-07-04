import React, { useState, useEffect, Fragment } from "react";
import ReactApexChart from "react-apexcharts";

const line_series = {
    options: {
        chart: {
            height: 350,
            type: "line",
            foreColor: "#FFFFFF",
        },
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            labels: {
                colors: ["#FFFFFF"],
                useSeriesColors: false,
            },
        },
        colors: ["#008FFB"],
        xaxis: {},
    },
};

const heat_series = {
    options: {
        chart: {
            height: 350,
            type: "heatmap",
            foreColor: "#FFFFFF",
        },
        dataLabels: {
            enabled: false,
        },
    },
};

const tree_series = {
    options: {
        chart: {
            type: "treemap",
            width: "100%",
            height: "100%",
            foreColor: "#FFFFFF",
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "11px",
            },
        },
    },
};

const area_series = {
    options: {
        chart: {
            type: "area",
            stacked: true,
            width: "100%",
            foreColor: "#FFFFFF",
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
            labels: {
                colors: ["#008FFB", "#00E396", "#CED4DC"],
                useSeriesColors: false,
            },
        },
        colors: ["#008FFB", "#00E396", "#CED4DC"],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: "dashed",
        },
        fill: {
            type: "solid",
            colors: ["#008FFB", "#00E396", "#CED4DC"],
        },

        xaxis: {
            type: "datetime",
        },
    },
};

const bar_h_series = {
    options: {
        chart: {
            id: "basic-bar",
            type: "bar",
            width: "100%",
            stacked: true,
            foreColor: "#FFFFFF",
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        xaxis: {},
    },
};

const bar_v_series = {
    options: {
        chart: {
            type: "bar",
            width: "100%",
            foreColor: "#FFFFFF",
        },
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            labels: {
                colors: ["#36cb21"],
                useSeriesColors: false,
            },
        },
        xaxis: {},
    },
};

export default function DataSection(props) {
    const [axisData, setAxisData] = useState([]);
    // Se crea el estado donde se almacenaran los datos en bruto
    const [cityData, setcityData] = useState({});
    // Se crea el estado el cual guardará la lista con los graficos
    // la cual está acomodada de forma que sea comoda su visualizacion
    const [listGraph, setlistGraph] = useState([]);
    // Se crea estado que obtendrá la cantidad de graficos y luego
    // Reflejará esa cantidad en botones para seleccionarlos
    const [count, setcount] = useState(1);
    // Se crea estado que se setea cuando se apreta un boton de seleccion de grafico
    // Estado el cual se compara con el grafico para poder elegir cual es visible
    const [graph, setGraph] = useState(1);
    // const requestURL = `${API}/api/cities/${props.city}`;

    // Funciones a ejecutar cuando se renderice el componente
    useEffect(() => {
        let l = [];
        Object.entries(props.data).forEach(([key, value]) => {
            l.push([value.type, value.data, value.title, value.info]);
            setlistGraph(l);
        });
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            {/*- CHART MENU -*/}
            <div className="flex-col md:flex md:flex-row md:justify-between items-center">
                <h1 className="text-4xl font-rale font-light text-white px-6">
                    {props.area}
                </h1>
                {/* BUTTONS SECTION */}
                <div className="flex justify-start md:justify-end space-x-4 p-2 text-white text-bold bg-purple-900 rounded-tl-2xl rounded-tr-2xl">
                    <div className="flex flex-wrap justify-between md:justify-end  text-bold ">
                        {[...Array(props.ngraphs)].map((e, i) => (
                            <button
                                className="flex hover:text-pink-600 "
                                key={i}
                                onClick={() => setGraph(i + 1)}
                            >
                                <h2 class="font-bold font-sans px-4 py-1 text-lg ">
                                    Gráfico {i + 1}
                                </h2>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/*- GRID -*/}
            <div className="grid grid-cols-1 md:grid-cols-5 md:rounded-tl-2xl rounded-bl-2xl rounded-br-2xl bg-indigo-900 ">
                {/*- Info Card -*/}
                <div className="col-span-1 md:col-span-2 px-5 md:p-8 space-y-3 text-white h-96">
                    {listGraph.map((e, i) => (
                        <Fragment>
                            <div
                                className={
                                    graph === i + 1
                                        ? "flex-col mx-auto items-center justify-between space-y-8"
                                        : "hidden"
                                }
                            >
                                <h2 className="fadetext font-sans font-bold text-xl">
                                    {e[2]}:
                                </h2>
                                <p className="fadetext text-xl font-athiti">
                                    {e[3]}
                                </p>
                            </div>
                        </Fragment>
                    ))}
                </div>
                {/* Contenedor que contiene graficos generados */}
                <div className="col-span-1 md:col-span-3 md:py-4 h-96">
                    <div className="flex h-full mx-auto items-center">
                        {/* 
          
          Generación de graficos: 

          - Se recorre la lista generada que finalmente tiene la forma [[tipo_graf1,data1],[tipo_graf2,data2],[tipo_graf3,data3]]
          - Por cada elemento de la lista si su primer elemento es tree genera un grafico si es bar genera otro
          - Cada grafico está en un contador que tiene la condicion que se mostrará solo si el estado manejado por los botones coincide con el orden en el que fue generado
          ↑ Es decir, si se presiona el boton del grafico 3, se puede ver el grafico 3 y los demas se ocultan y así.

          */}
                        {listGraph.map((listGraphItem, index) => {
                            switch (listGraphItem[0]) {
                                case "tree":
                                    // tree_series.series = tree_l[1].series;
                                    tree_series.series =
                                        listGraphItem[1].series;
                                    return (
                                        <div
                                            className={
                                                graph === index + 1
                                                    ? "block justify-center items-center min-w-full min-h-full mb-2 ml-2 lg:ml-0 lg:mb-1"
                                                    : "invisible"
                                            }
                                        >
                                            <ReactApexChart
                                                options={tree_series.options}
                                                series={tree_series.series}
                                                type="treemap"
                                                width="100%"
                                                height="350px"
                                            />
                                        </div>
                                    );
                                case "area":
                                    //  area_series.series = area_l[1].series;
                                    area_series.series = null;
                                    area_series.series =
                                        listGraphItem[1].series;
                                    //  area_series.options.xaxis.categories = area_l[1].categories;
                                    area_series.options.xaxis.categories = null;
                                    area_series.options.xaxis.categories =
                                        listGraphItem[1].categories;
                                    return (
                                        // ELIMINAR ESTE DIV
                                        <div
                                            className={
                                                graph === index + 1
                                                    ? // CAMBIAR INVISIBLE EN EL PRIMER CONDICIONAL POR BLOCK
                                                      "block justify-center items-center min-w-full min-h-full mb-2 px-2 lg:px-0 lg:mb-1"
                                                    : "invisible"
                                            }
                                        >
                                            <ReactApexChart
                                                options={area_series.options}
                                                series={area_series.series}
                                                type="area"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    );
                                case "bar_h":
                                    //  bar_series.options.xaxis.categories = bar_l[1].categories;
                                    bar_h_series.options.xaxis.categories =
                                        listGraphItem[1].categories;
                                    //  bar_series.series = bar_l[1].series;
                                    bar_h_series.series =
                                        listGraphItem[1].series;
                                    return (
                                        <div
                                            className={
                                                graph === index + 1
                                                    ? "block justify-center items-center min-w-full min-h-full mb-2 px-2 lg:px-0 lg:mb-1"
                                                    : "invisible"
                                            }
                                        >
                                            <ReactApexChart
                                                options={bar_h_series.options}
                                                series={bar_h_series.series}
                                                type="bar"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    );
                                case "bar_v":
                                    //  bar_series.options.xaxis.categories = bar_l[1].categories;
                                    bar_v_series.options.xaxis.categories =
                                        listGraphItem[1].categories;
                                    //  bar_series.series = bar_l[1].series;
                                    bar_v_series.series =
                                        listGraphItem[1].series;
                                    return (
                                        <div
                                            className={
                                                graph === index + 1
                                                    ? "block justify-center items-center min-w-full min-h-full mb-2 px-2 lg:px-0 lg:mb-1"
                                                    : "invisible"
                                            }
                                        >
                                            <ReactApexChart
                                                options={bar_v_series.options}
                                                series={bar_v_series.series}
                                                type="bar"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    );
                                case "heat":
                                    //  heat_series.series = heat_l[1].series;
                                    heat_series.series =
                                        listGraphItem[1].series;
                                    return (
                                        <div
                                            className={
                                                graph === index + 1
                                                    ? "block justify-center items-center min-w-full min-h-full mb-2 px-2 lg:px-0 lg:mb-1"
                                                    : "invisible"
                                            }
                                        >
                                            <ReactApexChart
                                                options={heat_series.options}
                                                series={heat_series.series}
                                                type="heatmap"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    );
                                case "line":
                                    //  heat_series.series = heat_l[1].series;
                                    line_series.series =
                                        listGraphItem[1].series;
                                    line_series.options.xaxis.categories =
                                        listGraphItem[1].categories;
                                    return (
                                        <div
                                            className={
                                                graph === index + 1
                                                    ? "block justify-center items-center min-w-full min-h-full mb-2 px-2 lg:px-0 lg:mb-1"
                                                    : "invisible"
                                            }
                                        >
                                            <ReactApexChart
                                                options={line_series.options}
                                                series={line_series.series}
                                                type="line"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
