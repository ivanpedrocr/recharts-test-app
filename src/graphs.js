import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { JSONData, mockDataArray1, mockDataArray2 } from "./mock-data";
import "./styles.css";

export const LineChartTest = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={mockDataArray2}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="first_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="age"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export const BarGraphTest = () => {
  return (
    <BarChart
      width={500}
      height={500}
      data={mockDataArray2}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      layout="vertical"
    >
      <Bar dataKey="age" fill="#375ddb" />
      <XAxis type="number" />
      <YAxis dataKey="first_name" type="category" />
      <Tooltip />
      <Legend />
    </BarChart>
  );
};

export const PyramidGraph = () => {
  return (
    <div className="container">
      <BarChart
        width={500}
        height={500}
        data={mockDataArray2.filter((i) => i.gender === "M")}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <Bar dataKey="age" fill="#375ddb" id="M" />
        <XAxis type="number" padding={{ left: 10, right: 10 }} />
        <YAxis type="category" dataKey="first_name" />
        <Tooltip />
        <Legend />
      </BarChart>
      <BarChart
        width={500}
        height={500}
        data={mockDataArray2.filter((i) => i.gender === "F")}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <Bar dataKey="age" fill="#db60b9" id="F" />
        <XAxis type="number" padding={{ left: 10, right: 0 }} />
        <YAxis type="category" dataKey="first_name" />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};
