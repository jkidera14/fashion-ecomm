import Button from "@/components/ui/Button";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const products = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        category: "Jackets",
        price: 79.99,
        stock: 18,
        status: "Active",
        image: "/images/product1.png",
    },
    {
        id: 2,
        name: "Premium Hoodie",
        category: "Hoodies",
        price: 59.99,
        stock: 8,
        status: "Active",
        image: "/images/product2.png",
    },
    {
        id: 3,
        name: "Oversized T-Shirt",
        category: "T-Shirts",
        price: 34.99,
        stock: 0,
        status: "Out of Stock",
        image: "/images/product3.png",

    },
    {
        id: 4,
        name: "Leather Sneakers",
        category: "Shoes",
        price: 99.99,
        stock: 25,
        status: "Active",
        image: "/images/product4.png",
    },
];

export default function ProductsPage() {
    return (
        <section>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Add Product
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        Create a new product for your store.
                    </p>
                </div>
                <Link href="/add-product">
                    <Button leftIcon={<FiPlus />}>
                        Add Product
                    </Button>
                </Link>
            </div>
        </section>
    )
}
