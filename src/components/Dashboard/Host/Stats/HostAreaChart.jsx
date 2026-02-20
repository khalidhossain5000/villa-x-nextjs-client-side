"use client"

import React from "react"
import Loader from "@/components/Shared/Loading/Loader"
import { useAuth } from "@/Hooks/useAuth"
import useAxiosSecure from "@/Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"
import { AreaChart, Area, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const HostAreaChart = () => {
  const { userInfo: user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: hostChartData, isLoading } = useQuery({
    queryKey: ["hostChartData", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(
        `/api/stats/host-chart-data/${user?.email}`
      )
      return res.data
    },
  })

  if (isLoading) return <Loader />

  const chartData = hostChartData?.monthlyBookings || []

  const chartConfig = {
    bookings: {
      label: "Bookings",
      color: "#3b82f6", // bright blue
    },
  }
const hasData = chartData && chartData.length > 0;

  console.log(
    hostChartData,
    "this is host chart data",
    chartData,
    "chart data",
    hasData,
    "hasData",
  );
  return (
    <div className="w-full max-w-2xl shadow-2xl rounded-xl dark:shadow-emerald-500 dark:border dark:border-[#f9a300] p-4 mt-12">
      {
        hasData ? <ChartContainer config={chartConfig}>
          <h2 className="text-center text-xl font-bold text-black dark:text-slate-200 ">Month Wise Room Bookings Chart</h2>
        <AreaChart
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
          <Area
            type="linear"
            dataKey="bookings"
            stroke="#3b82f6"
            fill="#bfdbfe"
            strokeWidth={2}
            dot={true}
          />
        </AreaChart>
      </ChartContainer>  : <div className="h-[300px] flex items-center justify-center text-gray-400 text-lg font-medium">
        No Monthly Booking data available to display
      </div>
      }
    </div>
  )
}

export default HostAreaChart
