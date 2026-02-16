"use client"

import React from "react"
import { Pie, PieChart, LabelList } from "recharts"
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

const RoomCatPieChart = ({ roomCategoryChartData }) => {

  const chartData = roomCategoryChartData || []

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Rooms By Category</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-6 pb-6">
        <ChartContainer
          config={{
            rooms: { label: "Rooms" },
          }}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="rooms"
                  labelKey="category"
                />
              }
            />

            <Pie
              data={chartData}
              dataKey="rooms"
              nameKey="category"
              stroke="0"
            >
              <LabelList
                dataKey="category"
                stroke="none"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Custom Indicator */}
        <div className="flex flex-wrap justify-center gap-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span>
                {item.category} ({item.rooms})
              </span>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}

export default RoomCatPieChart
