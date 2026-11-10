
import { getProfile } from '@/server-actions/user/getProfile'
import Button from '../ui/Button'
import Input from '../ui/Input'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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

type EditProfileFormValues = z.infer<typeof editProfileSchema>

export default function EditProfileForm({ userProfile }: EditProfileFormProps) {
    const { } = useForm<EditProfileFormValues>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            name: userProfile?.name ?? "",
            phone: userProfile?.phone ?? "",
            email: userProfile?.email ?? "",
        }
    })
    return (
        <form className="mt-10 space-y-8">
            {/* Personal Information */}
            <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">
                    Personal Information
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input label="Full Name" placeholder="John Doe" />
                    <Input label="Phone Number" placeholder="812 212 6789" />
                    <div className="md:col-span-2">
                        <Input label="Email Address" placeholder="Jane@gmail.com" />
                    </div>
                </div>
            </div>
            {/* Shipping Address */}
            <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">
                    Shipping Address
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input label="Country" />
                    <Input label="State" />
                    <Input label="City" />
                    <Input label="Postal Code" />
                    <div className="md:col-span-2">
                        <Input variant="textarea" label="Street Address" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button>
                    Save Changes
                </Button>
            </div>
        </form>
    )
}
