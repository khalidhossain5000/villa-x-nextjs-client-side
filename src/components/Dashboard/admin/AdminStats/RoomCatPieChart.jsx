import React from 'react';
import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const RoomCatPieChart = ({ roomCategoryChartData }) => {
  // ডাটা না থাকলে বা লোড না হলে হ্যান্ডেল করার জন্য
  if (!roomCategoryChartData || roomCategoryChartData.length === 0) {
    return <p className="text-center">No data available</p>;
  }

  // Chart এর জন্য ডাইনামিক কনফিগারেশন তৈরি
  const chartConfig = {
    rooms: {
      label: "Total Rooms",
    },
    // ডাটা থেকে ক্যাটাগরি অনুযায়ী লেবেল সেট করা
  };

  roomCategoryChartData.forEach((item) => {
    chartConfig[item.category.toLowerCase()] = {
      label: item.category,
      color: item.fill,
    };
  });

  return (
    <Card className="flex flex-col flex-1 h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Room Category Distribution</CardTitle>
        <CardDescription>Current Statistics</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="rooms" hideLabel />}
            />
            <Pie 
                data={roomCategoryChartData} 
                dataKey="rooms" 
                nameKey="category"
            >
              <LabelList
                dataKey="category"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) => value}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Total categories tracked: {roomCategoryChartData.length} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing real-time room availability by category
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoomCatPieChart;