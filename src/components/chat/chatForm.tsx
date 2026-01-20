"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid Email Format",
  }),
  body: z.string().min(1, {
    message: "Body can't be empty",
  }),
  subject: z.string().min(1, {
    message: "Subject can't be empty",
  }),
});

export function ChatForm({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      body: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          subject: values.subject,
          body: values.body,
          email: values.email,
        }),
      });
      if (res.ok) {
        form.reset({
          email: "",
          subject: "",
          body: "",
        }); // Reset the form with empty strings
        toast.success("Email sent");
        onSubmitSuccess(); // Call onSubmitSuccess function to close the modal
      } else {
        toast.error("Internal Error with the Email Service");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl
              id="email"
              
              >
                <Input
                  id="email"
                  type={"email"}
                  autoComplete={"off"}
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name={"subject"}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormControl>
                <Input id="subject" placeholder="Subject" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name={"body"}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="body">Body</FormLabel>
              <FormControl>
                <Textarea
                  id="body"
                  placeholder="Write here your Message"
                  className={"resize-none "}
                  rows={8}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
