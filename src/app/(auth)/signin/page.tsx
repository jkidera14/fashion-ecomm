"use client"

import FrontendLayout from "@/components/layouts/FrontendLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { authClient } from "@/lib/auth-client";
import { signInWithGoogle } from "@/services/signInWithGoogle";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import z from "zod";

const signinSchema = z.object({
    email: z.email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters long.")
});


type SignInFormValues = z.infer<typeof signinSchema>


export default function SignupPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormValues>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: SignInFormValues) => {
        const { error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
        });

        if (error) {
            toast.error(error.message as string);
            return;
        }

        toast.success("Login Successful");
        router.replace("/account");

    };
    return (
        <FrontendLayout>
            <section className="flex min-h-[70vh] items-center justify-center py-16">
                <div className="max-w-md w-full">
                    {/* header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">
                            Welcome Back
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Sign in to your account to continue shopping.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5 mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Email Address"
                            placeholder="john@gmail.com"
                            type="text"
                            {...register("email")}
                            error={errors.email?.message} />

                        <Input
                            {...register("password")}
                            label="Password"
                            placeholder="Create a Password"
                            type="text"
                            error={errors.password?.message} />

                        <Button fullWidth disabled={isSubmitting}>
                            {isSubmitting ? "Signing In...." : "Sign In"}
                        </Button>

                        <Button
                            onClick={signInWithGoogle}
                            leftIcon={<FcGoogle size={18} />}
                            type="button"
                            fullWidth variant="outline">
                            Continue with Google
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-semibold">
                            Create Account
                        </Link>
                    </p>
                </div>
            </section>
        </FrontendLayout>
    )
}
