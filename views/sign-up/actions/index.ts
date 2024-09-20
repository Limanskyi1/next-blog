
"use server";
import { signUpSchema } from "../model/validationSchema";
import { z } from "zod";

export async function signUpAction(formData: FormData) {
  const data = {
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const validatedData = signUpSchema.parse(data);
    return { success: true, message: "Account created successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors };
    }
    return { success: false, message: "An unknown error occurred" };
  }
}
