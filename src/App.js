import React from "react";
import "./App.css";
import { BarGraphTest, LineChartTest, PyramidGraph } from "./graphs";

export default function App() {
  return (
    <div>
      <LineChartTest />
      <BarGraphTest />
      <PyramidGraph />
    </div>
  );
}
