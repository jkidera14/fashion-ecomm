import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        size: "L",
        quantity: 2,
        price: 79.99,
        image: "/images/product1.png",
    },
    {
        id: 2,
        name: "Premium Hoodie",
        size: "M",
        quantity: 1,
        price: 59.99,
        image: "/images/product2.png",
    },
];

export default function OrdersPage() {
    return (
        <section>
            {/* Header */}
            <div>
                <h2 className="text-3xl font-semibold">
                    Order #51515
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Placed on July 17, 2026
                </p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
                {/* Left Side */}
                <div className="space-y-8">
                    {/* Customer */}
                    <div className="rounded-2xl border border-border bg-background p-6">
                        <h2 className="text-lg font-semibold">
                            Customer Information
                        </h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Name
                                </p>
                                <p className="mt-1 font-medium">
                                    Jane Doe
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Email
                                </p>
                                <p className="mt-1 font-medium">
                                    Jane@gmail.com
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Phone
                                </p>
                                <p className="mt-1 font-medium">
                                    +1551515151
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Address
                                </p>
                                <p className="mt-1 font-medium">
                                    25 Main Street,
                                    <br />
                                    New York, USA
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="rounded-2xl border border-border bg-background p-6">
                        <div className="border-b border-border">
                            <h2 className="text-lg font-semibold">
                                Order Items
                            </h2>
                        </div>

                        <div className="divide-y divide-border">
                            {products.map((product) => (
                                <div key={product.id} className="flex items-center gap-5 p-6">
                                    <Image src={product.image} alt={product.name}
                                        width={80} height={90} className="rounded-lg object-cover" />

                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {product.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-muted-foreground">

                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Right Side */}
            </div>
        </section>
    )
}
