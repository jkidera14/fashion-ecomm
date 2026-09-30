"use client"

import FrontendLayout from "@/components/layouts/FrontendLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import z from "zod";

const signupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long."),
    email: z.email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters long.")
});


type SignUpFormValues = z.infer<typeof signupSchema>


export default function SignupPage() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: SignUpFormValues) => {
        console.log(data);

    }
    return (
        <FrontendLayout>
            <section className="flex min-h-[70vh] items-center justify-center py-16">
                <div className="max-w-md w-full">
                    {/* header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">
                            Create Account
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Join us and start shopping your favorite styles.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5 mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            {...register("name")}
                            label="Full Name"
                            placeholder="John Doe"
                            type="text"
                            error={errors.name?.message} />

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
                            type="password"
                            error={errors.password?.message} />

                        <Button fullWidth disabled={isSubmitting}>
                            {isSubmitting ? "Creating Account...." : "Create Account"}
                        </Button>

                        <Button leftIcon={<FcGoogle size={18} />} type="button" fullWidth variant="outline">
                            Continue with Google
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/signin" className="font-semibold">
                            Sign In
                        </Link>
                    </p>
                </div>
            </section>
        </FrontendLayout>
    )
}
