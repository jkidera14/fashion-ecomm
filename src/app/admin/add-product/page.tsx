"use client"

import { useRef, useState } from "react";

const availableSizes = ["S", "M", "L", "XL", "XXL"];

const availableColors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Gray", value: "#6B7280" },
    { name: "Navy", value: "#1E3A8A" },
    { name: "Blue", value: "#2563EB" },
    { name: "Brown", value: "#8B5E3C" },
    { name: "Green", value: "#15803D" },
    { name: "Red", value: "#DC2626" },
];


export default function AddProductPage() {
    const [images, setImages] = useState<File[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [bestSeller, setBestSeller] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const files = Array.from(e.target.files || []);
        if (!files.length) return;

        setImages((prev) => [...prev, ...files].slice(0, 4));

        e.target.value = "";
    }

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    }
    return (
        <div className="mx-auto max-w-5xl space-y-8">
            {/* header */}
            <div>
                <h2 className="text-3xl font-semibold">
                    Add Product
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Create a new product for your store.
                </p>
            </div>

            {/* Images */}
            <section className="rounded-2xl border border-border bg-background p-6">
                <h2 className="mb-5 text-lg font-semibold">
                    Product Images
                </h2>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
