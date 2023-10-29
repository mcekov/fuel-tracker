import React, { useContext, useState } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  distance: z.string().min(1, {
    message: "Distance must be at least 1 numeric character.",
  }),
  efficiency: z.string().min(1, {
    message: "Efficiency must be at least 1 numeric character.",
  }),
  fuelType: z.string({
    message: "Select fuel type.",
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
      fuelType: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const { distance, efficiency, fuelType } = values;

    calculateExpenses(efficiency, distance, fuelType);
  }

  return (
    <>
      <Card className="mt-2 ">
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
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fuel type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a fuel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fuel types</SelectLabel>
                            <SelectItem value="diesel">Diesel</SelectItem>
                            <SelectItem value="gasoline">Gasoline</SelectItem>
                            <SelectItem value="lpg">LPG</SelectItem>
                            <SelectItem value="methane">Methane</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
