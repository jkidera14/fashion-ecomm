import FrontendLayout from "@/components/layouts/FrontendLayout";
import BreadCrumb from "@/components/ui/BreadCrumb";

const cartItems = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        image: "/images/product1.png",
        price: 79.99,
        quantity: 1,
        size: "M",
        color: "Charcoal",
    },
    {
        id: 2,
        name: "Premium Hoodie",
        image: "/images/product2.png",
        price: 59.99,
        quantity: 2,
        size: "L",
        color: "Brown",
    }
];

export default function CartPage() {

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
    const shipping = 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    return (
        <FrontendLayout>
            <section className="mx-auto max-w-6xl py-12">
                {/* Header */}
                <div>
                    <BreadCrumb items={[
                        {
                            label: "Home",
                            href: "/"
                        },
                        {
                            label: "Cart"
                        }
                    ]} />

                    <p className="mt-2 text-muted-foreground">
                        {totalItems - 1} Item{totalItems !== 1 && "s"} in your cart
                    </p>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">

                </div>
            </section>
        </FrontendLayout>
    )
}
