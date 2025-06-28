import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarchartDash({ budgetList }) {
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-xl text-blue-600">Budget Activity</h2>
        <p className="text-sm text-gray-500">Spending vs. Allocated</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={budgetList}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#3B82F6", fontSize: 12 }}
            axisLine={{ stroke: "#cbd5e1" }}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={{ stroke: "#cbd5e1" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              fontSize: "14px",
            }}
            labelStyle={{ color: "#0f172a", fontWeight: 600 }}
          />
          <Legend
            wrapperStyle={{ fontSize: 12 }}
            iconType="circle"
            formatter={(value) => (
              <span style={{ color: "#475569" }}>{value}</span>
            )}
          />
          <Bar
            dataKey="totalSpend"
            name="Spent"
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="amount"
            name="Allocated"
            fill="#93c5fd"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
