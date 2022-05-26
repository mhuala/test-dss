import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import networkgraph from "highcharts/modules/networkgraph";

if (typeof Highcharts === "object") {
    networkgraph(Highcharts);
}

export default function NetworkGraph(props) {
    const state = {
        options: {
            chart: {
                type: "networkgraph",
                marginTop: 50,
                height: 550,
                backgroundColor: "#312e81",
            },
            title: {
                text: " ",
            },

            subtitle: {
                text: `Fuente: datos.gob.cl`,
                align: "center",
                verticalAlign: "bottom",
                style: {
                    color: "#FFF",
                    fontWeight: "light",
                    fontStyle: "italic",
                    fontSize: "12px",
                    fontFamily: "Arial",
                },
            },
            plotOptions: {
                networkgraph: {
                    keys: ["from", "to"],
                    layoutAlgorithm: {
                        enableSimulation: true,
                        linkLength: 65,
                        integration: "verlet",
                        friction: -0.98,
                        gravitationalConstant: 0,
                        maxspeed: 15,
                    },
                },
            },
            tooltip: {
                backgroundColor: "#7842f5",
                borderColor: "black",
                borderRadius: 10,
                borderWidth: 1,
                formatter: function (e) {
                    if (String(this.point.rca).length === 9) {
                        return `
            <b style="color:white">${this.point.id}: </b> 
            <span style="color:white">${this.point.info} </span>
             ;`;
                    } else {
                        return `
            <b style="color:white">Código Arancelario:</b> 
            <span style="color:white">${this.point.id}</span>
            <br>
            <b style="color:white">RCA:</b>
            <span style="color:white">${this.point.rca}</span>
            `;
                    }
                    //console.log(e);
                },
            },
            series: [
                {
                    marker: {
                        radius: 7,
                    },
                    states: {
                        inactive: {
                            enabled: true,
                            linkOpacity: 0,
                            //opacity: 1
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                        allowOverlap: true,
                        padding: -12,
                        style: {
                            fontSize: "15px",
                        },
                        format: "{point.seccion}",
                    },
                    data: props.data,
                    nodes: props.nodes,
                },
            ],
        },
    };
    return <HighchartsReact highcharts={Highcharts} options={state.options} />;
}
