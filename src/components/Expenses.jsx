import React, { useContext } from "react";

import FuelExpenseContext from "../context/fuelExpenseContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Expenses = () => {
  const { fuelTrip, fuelLitters } = useContext(FuelExpenseContext);
  return (
    <div>
      {/*  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h4>Fuel</h4>
        <p id="money-plus" className="money plus">
          {fuelLitters.toFixed(2)}литра
        </p>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {fuelTrip.toFixed(2)}лв.
        </p>
      </div> */}
      <h3 className="text-xl font-bold text-slate-700 mt-5 mb-5">
        Calculate Price
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <Card className="bg-gradient-to-t from-orange-400 to-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Fuel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {fuelLitters.toFixed(2)}литра
            </div>
            <p className="text-xs text-muted-foreground text-white">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-t from-slate-400 to-slate-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Expense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {fuelTrip.toFixed(2)}лв.
            </div>
            <p className="text-xs text-muted-foreground text-white">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
