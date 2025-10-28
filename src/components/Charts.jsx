import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

const COLORS = {
  primary: "#0ea5e9",
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  secondary: "#64748b",
  info: "#06b6d4",
};

const CHART_COLORS = [
  COLORS.primary,
  COLORS.success,
  COLORS.warning,
  COLORS.danger,
  COLORS.secondary,
  COLORS.info,
];

export const CustomBarChart = ({ data, xKey, yKey, title, height = 300 }) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar dataKey={yKey} fill={COLORS.primary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CustomPieChart = ({
  data,
  dataKey,
  nameKey,
  title,
  height = 300,
}) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CustomLineChart = ({ data, xKey, yKey, title, height = 300 }) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={COLORS.primary}
            strokeWidth={3}
            dot={{ fill: COLORS.primary, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: COLORS.primary, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CustomAreaChart = ({ data, xKey, yKey, title, height = 300 }) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={COLORS.primary}
            fill={COLORS.primary}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const DemographicsChart = ({ data, title, height = 400 }) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="range"
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={{ stroke: "#cbd5e1" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend />
          <Bar
            dataKey="male"
            stackId="a"
            fill={COLORS.primary}
            name="Erkak"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="female"
            stackId="a"
            fill={COLORS.success}
            name="Ayol"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
