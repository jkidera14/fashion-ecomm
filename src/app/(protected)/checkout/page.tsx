import FrontendLayout from "@/components/layouts/FrontendLayout";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Input from "@/components/ui/Input";
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
                    <BreadCrumb items={[
                        {
                            label: "Home",
                            href: "/"
                        },
                        {
                            label: "Cart",
                            href: "/cart"
                        },
                        {
                            label: "Checkout"
                        }
                    ]} />

                    <p className="mt-2 text-muted-foreground">
                        Complete your order securely.
                    </p>
                </div>

                <form className="grid gap-10 lg:grid-cols-[2fr_1fr]">
                    {/* Left */}
                    <div className="space-y-8">
                        {/* Shipping Address */}
                        <div className="rounded-2xl border border-border p-6">
                            <h2 className="font-semibold text-2xl">
                                Shipping Address
                            </h2>
                            <div className="mt-6 grid gap-5 md:grid-cols-2">
                                <Input label="First Name" placeholder="John" />
                                <Input label="Last Name" placeholder="Doe" />
                                <Input label="Email" placeholder="john@gmail.com" />
                                <Input label="Phone Number" placeholder="+254 700 000 000" />
                                <Input label="State" placeholder="California" />
                                <Input label="City" placeholder="Burbank" />

                                <div>
                                    <Input label="Street Address" placeholder="No 3 ......" variant="textarea" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                </form>
            </section>
        </FrontendLayout>
    )
}
