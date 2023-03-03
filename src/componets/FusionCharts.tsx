import React from "react";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Charts from "fusioncharts/fusioncharts.charts";
import RNFusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(RNFusionCharts, Charts, FusionTheme);

const FusionCharts = (props: any) => <ReactFC {...props} />;

export default FusionCharts;