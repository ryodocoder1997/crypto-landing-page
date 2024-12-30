"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
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
import { useEffect, useRef, useState } from "react";
import { DateTimePicker, TimePicker } from "@/components/date-picker";
import { zodEnum } from "@/public/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAutosizeTextArea } from "@/components/auto-rezie-text-area";
import { Textarea } from "@/components/ui/textarea";

const evenTypeOptions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Corporate",
  "The Wake",
  "Others",
];

const cateringStyleOptions = [
  "Chao Easy Delivery (Delivery & Set up)",
  "Chao Catering Team (Cocktail Style)",
  "Chao Catering Team (Buffet Style)",
  "Others",
];

const includeVegetarianOptions = ["None", "10%", "20%", "Others"];

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string(),
  deliveryTime: z.string(),
  eventDate: z.string(),
  address: z.string(),
  numberOfGuests: z.preprocess(
    (x) => x || undefined,
    z.coerce.number().int().min(0).max(31).optional()
  ),
  eventType: z.enum(zodEnum(evenTypeOptions)),
  cateringStyle: z.enum(zodEnum(cateringStyleOptions)),
  includeVegetarian: z.enum(zodEnum(includeVegetarianOptions)),
  note: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export function ContactForm() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [triggerAutoSize, setTriggerAutoSize] = useState("");
  useAutosizeTextArea({
    textAreaRef,
    triggerAutoSize: triggerAutoSize,
    minHeight: 60,
    maxHeight: 300,
  });
  const [time, setTime] = useState<Date | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      deliveryTime: "",
      eventDate: "",
      address: "",
      numberOfGuests: 0,
      eventType: "",
      cateringStyle: "",
      includeVegetarian: "",
      note: "",
    },
  });

  const bio = form.watch("note");
  useEffect(() => {
    if (textAreaRef.current) {
      setTriggerAutoSize(bio);
    }
  }, [bio]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = {
      ...data,
      eventDate: date,
      deliveryTime: time,
    };

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(result, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 m-auto"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Contact Name <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Contact Name"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  email <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <FormControl>
                <Input className="text-black" placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Phone <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryTime"
          render={() => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Delivery Time <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <FormControl>
                <TimePicker
                  textColors="text-black"
                  date={time}
                  onChange={setTime}
                  containerStyles="justify-start"
                />
              </FormControl>
              <FormDescription>
                *We recommend the delivery time is 30 mins prior to the serving
                time.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDate"
          render={() => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Event Date <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <FormControl>
                <DateTimePicker
                  displayFormat={{ hour24: "yyyy/MM/dd" }}
                  granularity="day"
                  className="text-black"
                  value={date}
                  onChange={setDate}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">address</strong>
              </FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Number of Guests
                </strong>
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of Guests"
                  className="text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Event Type <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder="-- Select One --" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {evenTypeOptions.map((item) => (
                    <SelectItem value={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cateringStyle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Catering Style <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder="-- Select One --" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cateringStyleOptions.map((item) => (
                    <SelectItem value={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="includeVegetarian"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                <strong className="uppercase text-black">
                  Would you like to include some Vegetarian or Vegan in your
                  order? <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder="-- Select One --" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {includeVegetarianOptions.map((item) => (
                    <SelectItem value={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <strong className="uppercase text-black">
                  Note <span className="text-red-600">*</span>
                </strong>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="eg. Vegan, Gluten-free, Halal etc."
                  className="text-black"
                  {...field}
                  ref={textAreaRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
