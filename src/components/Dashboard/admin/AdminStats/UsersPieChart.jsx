"use client"

import React from "react"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const roleColors = {
  admin: "#f97316",
  host: "#3b82f6",
  guest: "#10b981",
}

const UsersPieChart = ({ roleChartData }) => {

  const formattedData =
    roleChartData?.map((item) => ({
      ...item,
      fill: roleColors[item.role?.toLowerCase()] || "#9ca3af",
    })) || []

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Users By Role</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-6 pb-6">

        <ChartContainer
          config={{ users: { label: "Users" } }}
          className="aspect-square max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={formattedData}
              dataKey="users"
              nameKey="role"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>

        {/* Custom Indicator */}
        <div className="flex flex-wrap justify-center gap-4">
          {formattedData.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="capitalize">
                {item.role} ({item.users})
              </span>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}

export default UsersPieChart
