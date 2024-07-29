"use client";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { z, ZodObject } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlightSearchSchema } from "@/validationSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { CalendarIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { Matcher } from "react-day-picker";
import { format } from "date-fns";

export function CheckFlightStatusFilterCard() {
  const form = useForm<z.infer<typeof FlightSearchSchema>>({
    resolver: zodResolver(FlightSearchSchema),
    defaultValues: {
      pnr: "",
      flight: "",
      date: undefined,
      from: "",
      to: "",
    },
  });

  function onSubmit(values: z.infer<typeof FlightSearchSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardContent>
        <div className="mt-4 p-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-center space-y-6"
            >
              <Tabs defaultValue="pnr" className="w-full">
                <TabsList>
                  <TabsTrigger className="font-sans text-sm" value="pnr">
                    PNR
                  </TabsTrigger>
                  <TabsTrigger className="font-sans text-sm" value="flight">
                    Flight
                  </TabsTrigger>
                  <TabsTrigger className="font-sans text-sm" value="date">
                    Date/Place
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="pnr">
                  <div className="mt-4 flex w-full flex-row space-x-8 px-4">
                    <FormField
                      control={form.control}
                      name="pnr"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              className="font-sans text-sm text-foreground placeholder:text-foreground/50"
                              placeholder="PNR"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="flight">
                  <div className="mt-4 flex w-full flex-row space-x-8 px-4">
                    <FormField
                      control={form.control}
                      name="flight"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              className="font-sans text-sm text-foreground placeholder:text-foreground/50"
                              placeholder="6E-Flight No."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="date">
                  <div className="mt-4 flex w-full flex-row items-center space-x-8 px-4">
                    <FormField
                      control={form.control}
                      name="from"
                      render={({ field }) => (
                        <FormItem>
                          <FormItem>
                            <FormLabel className="font-sans text-sm text-foreground/50">
                              From
                            </FormLabel>
                          </FormItem>
                          <Select>
                            <FormControl>
                              <SelectTrigger className="min-w-40 font-sans text-sm">
                                <SelectValue
                                  placeholder="Delhi"
                                  className="font-sans text-sm"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="BOM">Mumbai</SelectItem>
                              <SelectItem value="DEL">Delhi</SelectItem>
                              <SelectItem value="SPN">Spain</SelectItem>
                              <SelectItem value="NYC">New York</SelectItem>
                              <SelectItem value="PAR">Paris</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="to"
                      render={({ field }) => (
                        <FormItem>
                          <FormItem>
                            <FormLabel className="font-sans text-sm text-foreground/50">
                              To
                            </FormLabel>
                          </FormItem>
                          <Select>
                            <FormControl>
                              <SelectTrigger className="min-w-40 font-sans text-sm">
                                <SelectValue
                                  placeholder="Mumbai"
                                  className="font-sans text-sm"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="BOM">Mumbai</SelectItem>
                              <SelectItem value="DEL">Delhi</SelectItem>
                              <SelectItem value="SPN">Spain</SelectItem>
                              <SelectItem value="NYC">New York</SelectItem>
                              <SelectItem value="PAR">Paris</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="font-sans text-sm text-foreground/50">
                            Trip Date
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-sans text-sm font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                className="font-sans text-sm"
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Button
                type="submit"
                variant={"default"}
                size={"sm"}
                className="flex max-w-40 flex-row items-center justify-center space-x-2 font-sans text-sm"
              >
                Live Status <PaperPlaneIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
