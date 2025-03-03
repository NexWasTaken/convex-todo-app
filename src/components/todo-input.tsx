"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "convex/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../convex/_generated/api";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  todoContent: z.string().min(1, {
    message: "Todo can't be empty!",
  }),
});

export default function TodoInput() {
  const addTodo = useMutation(api.todos.add);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoContent: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addTodo({ content: values.todoContent });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="todoContent"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Todo Title</FormLabel> */}
              <FormControl>
                {/* <Input placeholder="shadcn" {...field} /> */}
                <Textarea className="w-xl" {...field} />
              </FormControl>
              <FormDescription>Todo Content </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
