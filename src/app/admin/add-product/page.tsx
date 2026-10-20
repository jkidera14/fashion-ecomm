"use client"

import { useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";

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
                            {images[index] ? (
                                <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
                                    <img src={URL.createObjectURL(images[0])} alt="selectedimage" className="w-full h-full object-cover" />

                                    <button onClick={() => removeImage(index)} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center
                                                        rounded-full bg-background shadow transition hover:bg-destructive hover:text-white">
                                        <FiX />
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => inputRef.current?.click()} className="flex aspect-square w-full flex-col items-center justify-center rounded-xl
                              border-2 border-dashed border-border transition hover:border-primary hover:bg-surface">
                                    <LuPlus size={30} className="text-muted-foreground" />

                                    <span className="mt-3 text-sm text-muted-foreground">
                                        Upload Image
                                    </span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <input hidden ref={inputRef} multiple type="file" accept="image/*" onChange=
                    {handleImageChange} />

                <p className="mt-4 text-sm text-muted-foreground">
                    Upload between 1 and 4 product images.
                </p>
            </section>
        </div>
    )
}
