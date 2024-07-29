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
import { LoginSchema } from "@/validationSchema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [successMessage, setSuccessMessage] = useState<string | undefined>(
    undefined,
  );
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    setErrorMessage(undefined);
    setSuccessMessage(undefined);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}v1/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      },
    );

    const result = await response.json();

    if (!result.success) {
      setErrorMessage(result.message);
    } else {
      setSuccessMessage(result.message);
      router.replace("/dashboard");
    }
  }

  return (
    <CardWrapper
      headerLabel="Welcome to Indigo"
      subHeaderString="Login to check live status"
      backQuestionString="New to Indigo?"
      backButtonLabel="Register as new user"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-4">
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
          </div>
          <FormError message={errorMessage} />
          <FormSuccess message={successMessage} />
          <Button
            type="submit"
            variant="default"
            size="sm"
            className="font-sans"
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
