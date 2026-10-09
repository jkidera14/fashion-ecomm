import FrontendLayout from "@/components/layouts/FrontendLayout";
import z from "zod";

const checkoutSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters."),

    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters."),

    email: z.email("Please enter a valid email address."),

    phone: z
        .string()
        .min(10, "Please enter a valid phone number."),

    state: z
        .string()
        .min(2, "State is required."),

    city: z
        .string()
        .min(2, "City is required."),

    address: z
        .string()
        .min(2, "Street address is required."),
});

type CheckFormValues = z.infer<typeof checkoutSchema>;

const orderItems = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        image: "/images/product1.png",
        quantity: 1,
        price: 79.99,
    },
    {
        id: 2,
        name: "Premium Hoodie",
        image: "images/product2.png",
        quantity: 2,
        price: 59.99,

    },
];

export default function CheckoutPage() {
    return (
        <FrontendLayout>
            <section className="mx-auto max-w-7xl py-12">
                <div className="mb-10">

                </div>
            </section>
        </FrontendLayout>
    )
}
