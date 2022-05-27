import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-scroll";
import DataSection from "../Components/DataSection";
import RegionHero from "../Components/RegionHero";
import ContentRegion from "../Components/ContentRegion";
import axios from "axios";
const API = import.meta.env.VITE_API_ONLINE;

export default function Region(props) {
  const requestURL = `${API}/api/region/data`;
  // Se crea el estado el cual guardará la lista con los graficos
  const [listGraph, setListGraph] = useState({});
  // Se crea un JSON que contiene los datos respecto a los graficos de interes

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      Object.entries(res.data).forEach(([key, value]) => {
        Object.entries(value).forEach(([k, v]) => {
          setListGraph((prevState) => ({
            ...prevState,
            [k]: v,
          }));
        });
      });
    });
  }, []);

  return (
    <Fragment>
      <div class="flex flex-col bg-brand">
        <RegionHero name="losrios" />
        {/* Buttons */}

        <ContentRegion />

        {/* Data-Views */}
        <div id="commerce_economy">
          {listGraph.commerce_economy && (
            <DataSection
              ngraphs={Object.keys(listGraph.commerce_economy).length}
              area={"Economía y Comercio"}
              data={listGraph.commerce_economy}
            />
          )}
        </div>
        <div id="construction">
          {listGraph.construction && (
            <DataSection
              ngraphs={Object.keys(listGraph.construction).length}
              area={"Construcción"}
              data={listGraph.construction}
            />
          )}
        </div>
        <div id="transport_communication">
          {listGraph.transport_communication && (
            <DataSection
              ngraphs={Object.keys(listGraph.transport_communication).length}
              area={"Transportes y Comunicación"}
              data={listGraph.transport_communication}
            />
          )}
        </div>
        <div id="investment">
          {listGraph.investment && (
            <DataSection
              ngraphs={Object.keys(listGraph.investment).length}
              area={"Inversión"}
              data={listGraph.investment}
            />
          )}
        </div>
        <div id="security">
          {listGraph.security && (
            <DataSection
              ngraphs={Object.keys(listGraph.security).length}
              area={"Seguridad"}
              data={listGraph.security}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}
