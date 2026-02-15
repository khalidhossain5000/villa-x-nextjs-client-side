"use client"

import React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const HostBarChart = ({ data }) => {
  console.log(data, "inside bar chart")

  // Transform incoming data for the chart
  const chartData = data?.monthlyRevenue?.map((item) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return {
      month: monthNames[item._id.month - 1] || `Month ${item._id.month}`,
      revenue: item.revenue,
    }
  }) || []

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#0300ff",
    },
  }

  return (
    <div className='max-w-xl '>
        <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        width={200}
        height={200}
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="revenue" fill="#0fe60e" radius={8} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

export default HostBarChart
