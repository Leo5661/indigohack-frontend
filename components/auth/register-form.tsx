"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { CardWrapper } from "./card-wrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RegisterSchema } from "@/validationSchema";

export function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    console.log(data);
  }

  return (
    <CardWrapper
      headerLabel="Register to Indigo"
      subHeaderString="Create account to get live status. "
      backQuestionString="Already have account?"
      backButtonLabel="Login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="font-sans text-sm text-foreground placeholder:text-foreground/50"
                      placeholder="rahul singh"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="font-sans text-sm text-foreground placeholder:text-foreground/50"
                      placeholder="rahul.singh@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="font-sans text-sm text-foreground placeholder:text-foreground/50"
                      placeholder="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="font-sans text-sm text-foreground placeholder:text-foreground/50"
                      placeholder="confirm password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            variant="default"
            size="sm"
            className="font-sans"
          >
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
