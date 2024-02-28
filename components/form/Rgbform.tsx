"use client";
import { Slider } from "@/components/ui/slider";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  red: z.coerce
    .number()
    .min(0)
    .max(255, { message: "value must be less than 255" }),
  green: z.coerce
    .number()
    .min(0)
    .max(255, { message: "value must be less than 255" }),
  blue: z.coerce
    .number()
    .min(0)
    .max(255, { message: "value must be less than 255" }),
});

export type FormSchemaType = z.infer<typeof formSchema>;

const Rgbform = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      red: 0,
      green: 0,
      blue: 0,
    },
  });

  function onSubmit(values: FormSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="red"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Red</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={255}
                  step={1}
                  className="w-[300px]"
                  defaultValue={[value]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                  value={[form.getValues("red")]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="green"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Green</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={255}
                  step={1}
                  className="w-[300px]"
                  defaultValue={[value]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                  value={[form.getValues("green")]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="blue"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Blue</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={255}
                  step={1}
                  className="w-[300px]"
                  defaultValue={[value]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                  value={[form.getValues("blue")]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
      <div>{JSON.stringify(form.watch())}</div>
    </Form>
  );
};

export default Rgbform;
