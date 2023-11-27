import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Please enter a name with at least 2 characters.",
    })
    .max(30, {
      message: "Name should be no more than 20 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z
    .string()
    .min(2, {
      message: "Subject should be at least 2 characters.",
    })
    .max(256, {
      message: "Subject should be no more than 256 characters.",
    }),
  message: z
    .string()
    .min(2, {
      message: "Please provide a message with at least 2 characters.",
    })
    .max(4096, {
      message: "Message should be no more than 4096 characters.",
    }),
});
export type ContactSchema = z.infer<typeof contactSchema>;
