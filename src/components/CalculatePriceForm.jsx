import React, { useContext, useState } from "react";
import FuelExpenseContext from "../context/FuelExpenseContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  distance: z.string().min(1, {
    message: "Distance must be at least 1 numeric character.",
  }),
  efficiency: z.string().min(1, {
    message: "Efficiency must be at least 1 numeric character.",
  }),
});

const CalculatePriceForm = () => {
  const { calculateExpenses } = useContext(FuelExpenseContext);

  /*   const [distance, setDistance] = useState(0);
  const [efficiency, setEfficiency] = useState(0); */

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distance: "",
      efficiency: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const { distance, efficiency } = values;

    calculateExpenses(efficiency, distance);
  }

  return (
    <>
      {/* <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="distance"
            >
              Trip Distance
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              id="distance"
              type="number"
              placeholder="Add distance (km)"
              pattern="[0-9]*"
              inputMode="numeric"
              value={distance || ""}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="efficiency"
            >
              Fuel Efficiency (L/100km)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              id="efficiency"
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              value={efficiency || ""}
              onChange={(e) => setEfficiency(e.target.value)}
              placeholder="Add Efficiency (km)"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={handleCalculate}
              className="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calculate
            </Button>
            <a
              className="cursor-pointer inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-500"
              onClick={() => {
                setDistance(0);
                setEfficiency(0);
              }}
            >
              Cancel
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 All rights reserved.
        </p>
      </div> */}

      <Card className="mt-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          {/* <CardTitle className="text-sm font-medium text-slate-700">
            Fuel
          </CardTitle> */}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="distance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trip Distance</FormLabel>
                    <FormControl>
                      <Input placeholder="Add distance (km)" {...field} />
                    </FormControl>
                    <FormDescription>
                      {/* This is your public display name. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="efficiency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Fuel Efficiency (L/100km)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Add efficiency (L/100km)"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {/* This is your public display name. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Calculate</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default CalculatePriceForm;
