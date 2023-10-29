import React, { useContext } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";
import ChartIcon from "./ChartIcon";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Price = () => {
  const { fuelData } = useContext(FuelExpenseContext);

  return (
    <>
      {/* <div className="relative h-[90px] flex rounded-md border-gray-200 bg-white bg-clip-border shadow-md dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="h-50 ml-4 flex w-auto flex-col mt-2">
          <p className="text-slate-700 font-dm text-sm font-medium">
            {fuelData.fuel} price
          </p>
          <p className="text-slate-700 text-3xl font-bold text-navy-700 dark:text-white">
            {`${fuelData ? fuelData.price : "N/A"} ${
              fuelData ? fuelData.dimension : ""
            }`}
          </p>
        </div>
        <div className="ml-auto flex w-auto items-top pt-2 pr-2">
          <ChartIcon
            className="border-red-200 fill-red-300"
            variant="priceUp"
          />
        </div>
      </div> */}

      <div className="grid grid-cols-2 gap-2">
        {fuelData.map((f) => (
          <Card key={f.fuel}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">
                {f.fuel} price
              </CardTitle>
              <ChartIcon
                className="border-green-200 fill-green-300"
                variant="priceDown"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-700">{`${
                f ? f.price : "Loading..."
              } ${f ? f.dimension : ""}`}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        ))}

        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              {fuelData.fuel} price
            </CardTitle>
            <ChartIcon
              className="border-green-200 fill-green-300"
              variant="priceDown"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-700">{`${
              fuelData ? fuelData.price : "N/A"
            } ${fuelData ? fuelData.dimension : ""}`}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              {fuelData.fuel} price
            </CardTitle>
            <ChartIcon
              className="border-green-200 fill-green-300"
              variant="priceDown"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-700">{`${
              fuelData ? fuelData.price : "N/A"
            } ${fuelData ? fuelData.dimension : ""}`}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              {fuelData.fuel} price
            </CardTitle>
            <ChartIcon
              className="border-green-200 fill-green-300"
              variant="priceDown"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-700">{`${
              fuelData ? fuelData.price : "N/A"
            } ${fuelData ? fuelData.dimension : ""}`}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card> */}
      </div>
    </>
  );
};

export default Price;
