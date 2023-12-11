import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Please enter a name with at least 1 character.",
    })
    .max(30, {
      message: "Name should be no more than 30 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z
    .string()
    .min(15, {
      message: "Subject should be at least 15 characters.",
    })
    .max(256, {
      message: "Subject should be no more than 256 characters.",
    }),
  message: z
    .string()
    .min(20, {
      message: "Please provide a message with at least 20 characters.",
    })
    .max(4096, {
      message: "Message should be no more than 4096 characters.",
    }),
});
export type ContactSchema = z.infer<typeof contactSchema>;
