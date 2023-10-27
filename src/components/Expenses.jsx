import React, { useContext } from "react";

import FuelExpenseContext from "../context/FuelExpenseContext";
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              Fuel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-700">
              {fuelLitters.toFixed(2)}литра
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              Expense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-700">
              {fuelTrip.toFixed(2)}лв.
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
