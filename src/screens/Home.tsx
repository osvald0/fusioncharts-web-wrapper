import React from "react";
import { useLocation } from "react-router-dom";

import { decode } from "../util/uri";

import FusionCharts from "../componets/FusionCharts";

const Home = () => {
    const { search } = useLocation();
    const decodedData = decode(search.split("chart=")[1]);
    return (
        <FusionCharts {...JSON.parse(decodedData)} />
    );
}

export default Home;