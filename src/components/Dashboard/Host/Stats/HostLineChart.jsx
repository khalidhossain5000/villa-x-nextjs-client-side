"use client";

import React from "react";
import Loader from "@/components/Shared/Loading/Loader";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartSkeleton from "@/components/Shared/SkeletonLoader/ChartSkeleton";

const HostLineChart = () => {
  const { userInfo: user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: hostChartData, isLoading } = useQuery({
    queryKey: ["hostChartData", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(
        `/api/stats/host-chart-data/${user?.email}`,
      );
      return res.data;
    },
  });

  if (isLoading ) return <ChartSkeleton />;

  const chartData = hostChartData?.monthlyRevenue || [];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#22c55e",
    },
  };
  const hasData = chartData && chartData.length > 0;

  return (
    <div className="w-full max-w-2xl shadow-2xl rounded-lg mt-12 p-4 dark:shadow-zinc-500 dark:border dark:border-[#f9a300]">
      {hasData ? (
        <ChartContainer config={chartConfig}>
          <h2 className="text-center text-xl font-bold text-black dark:text-slate-200 ">Month Wise Revenue Chart</h2>
          <LineChart
            data={chartData}
            margin={{ left: 12, right: 12, top: 20, bottom: 20 }}
            width={600}
            height={300}
            accessibilityLayer
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              type="linear"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      ) : (
        <div className="h-[300px] w-full flex items-center justify-center text-gray-400 text-lg font-medium">
          No Monthly Revenue data available to display
        </div>
      )}
    </div>
  );
};

export default HostLineChart;
