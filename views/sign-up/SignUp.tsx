"use client";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUpSchema } from "./model/validationSchema";
import { ErrorMessage } from "@/shared/ui/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type signUpSchemaType = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: signUpSchemaType) => {
    console.log("Данные формы:", data);
  };

  return (
    <div className="max-w-[700px] m-auto">
      <h2 className="text-3xl font-semibold mb-4">Create an account</h2>
      <p className="mb-4">
        Already have an account?{" "}
        <Link
          className="text-primary text underline decoration-primary"
          href="sign-in"
        >
          Sign in
        </Link>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input {...register("name")} placeholder="Name"/>
        {errors.name && <ErrorMessage text={errors.name.message!}/>}
        <Input {...register("username",{ required: true })} placeholder="Username"/>
        {errors.username && <ErrorMessage text={errors.username.message!}/>}
        <Input {...register("email")} placeholder="Email"/>
        {errors.username && <ErrorMessage text={errors.email?.message!}/>}
        <Input  {...register("password")} placeholder="Password"/>
        {errors.username && <ErrorMessage text={errors.password?.message!}/>}
        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
};

export default SignUp