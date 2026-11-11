"use client"
import { getProfile } from '@/server-actions/user/getProfile'
import Button from '../ui/Button'
import Input from '../ui/Input'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfile } from '@/server-actions/user/updateProfile'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


interface EditProfileFormProps {
    userProfile: Awaited<ReturnType<typeof getProfile>>
}

export const editProfileSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters.")
        .max(100, "Name is too long."),

    phone: z
        .string()
        .trim()
        .min(10, "Pease Enter a valid Phone Number.")
        .max(20, "Phone Number is too long."),

    email: z.email(),

    firstname: z.string().trim().min(2, "First Name is Required."),

    lastname: z.string().trim().min(2, "Last Name is Required."),

    country: z.string().trim().min(2, "Country is Required."),

    state: z.string().trim().min(2, "State is Required."),

    city: z.string().trim().min(2, "City is Required."),

    postalCode: z.string().trim().optional(),

    street: z.string().trim().min(5, "Street Address is Required.")
});

export type EditProfileFormValues = z.infer<typeof editProfileSchema>

export default function EditProfileForm({ userProfile }: EditProfileFormProps) {
    const router = useRouter();
    const address = userProfile?.addresses[0]
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EditProfileFormValues>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            name: userProfile?.name ?? "",
            phone: userProfile?.phone ?? "",
            email: userProfile?.email ?? "",

            country: address?.country ?? "",
            firstname: address?.firstName ?? "",
            lastname: address?.lastName ?? "",
            city: address?.city ?? "",
            state: address?.state ?? "",
            postalCode: address?.postalCode ?? "",
            street: address?.street ?? "",
        },
    });

    const onSubmit = async (data: EditProfileFormValues) => {
        const result = await updateProfile(data);

        if (!result.success) {
            return toast.error(result.message);
        }

        toast.success(result.message);


        router.refresh();
    }
    return (
        <form className="mt-10 space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Personal Information */}
            <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">
                    Personal Information
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input
                        {...register("name")}
                        label="Full Name"
                        placeholder="John Doe"
                        error={errors.name?.message}
                    />
                    <Input
                        {...register("phone")}
                        label="Phone Number"
                        placeholder="812 212 6789"
                        error={errors.phone?.message}
                    />
                    <div className="md:col-span-2">
                        <Input
                            {...register("email")}
                            label="Email Address"
                            placeholder="Jane@gmail.com"
                            error={errors.email?.message}
                        />
                    </div>
                </div>
            </div>
            {/* Shipping Address */}
            <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">
                    Shipping Address
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input label="First Name" {...register("firstname")} error={errors.firstname?.message} />
                    <Input label="Last" {...register("lastname")} error={errors.lastname?.message} />
                    <Input label="Country" {...register("country")} error={errors.country?.message} />
                    <Input label="State" {...register("state")} error={errors.state?.message} />
                    <Input label="City" {...register("city")} error={errors.city?.message} />
                    <Input label="Postal Code" {...register("postalCode")} error={errors.postalCode?.message} />
                    <div className="md:col-span-2">
                        <Input variant="textarea" label="Street Address" {...register("street")} error={errors.street?.message} />
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button disabled={isSubmitting}>
                    {isSubmitting ? "Saving...." : "Save Changes"}
                </Button>
            </div>
        </form>
    )
}
