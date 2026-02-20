"use client"

import React from "react"
import { Pie, PieChart, Cell } from "recharts"
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
  admin: "#f97316", // Orange
  host: "#3b82f6",  // Blue
  guest: "#10b981", // Green
}

const UsersPieChart = ({ roleChartData }) => {
  const formattedData = roleChartData?.map((item) => ({
    ...item,
    fill: roleColors[item.role?.toLowerCase()] || "#9ca3af",
  })) || []

  const totalUsers = formattedData.reduce((acc, curr) => acc + curr.users, 0);

  return (
    <Card className="flex flex-col border-none shadow-md">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-xl font-bold">Users By Role</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 items-center gap-4">
        <ChartContainer
          config={{ 
            users: { label: "Users" },
            host: { label: "Host", color: roleColors.host },
            guest: { label: "Guest", color: roleColors.guest },
            admin: { label: "Admin", color: roleColors.admin },
          }}
          className="aspect-square w-full max-h-[250px]"
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
              innerRadius={60}    
              outerRadius={80}    
              paddingAngle={5}    
              strokeWidth={0}
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full max-w-[300px] mt-2">
          {formattedData.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full shrink-0" 
                  style={{ backgroundColor: item.fill }}
                />
                <span className="capitalize font-medium text-muted-foreground">
                    {item.role}
                </span>
              </div>
              <span className="font-bold">{item.users}</span>
            </div>
          ))}
          {/* Total Count Display */}
          <div className="col-span-2 border-t pt-2 mt-2 flex justify-between items-center text-sm font-bold">
            <span>Total Users:</span>
            <span>{totalUsers}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UsersPieChart