"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",

];

const sizes = ["S", "M", "L", "XL"];

const colors = [
    {
        name: "Charcoal",
        value: "#1F2937",
    },
    {
        name: "Brown",
        value: "#8B5E3C",
    },
    {
        name: "Light Gray",
        value: "#E5E7EB",
    },

];

export default function ProductPageComponent() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    return (
        <section className="py-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Images */}
                <div className="flex flex-col-reverse gap-4 md:flex-row">
                    {/* Gallery Images */}
                    <div className="flex gap-3 overflow-x-auto md:flex-col
                                    md:overflow-visible">
                        {images.map((image) => (
                            <button key={image} className={`shrink-0 overflow-hidden
                            rounded-xl border-2 transition ${selectedImage === image ? "border-primary" :
                                    "border-border"}`} onClick={() => setSelectedImage(image)}>
                                <Image src={image} alt="product" width={90} height={110} className="h-24 w-20
                                object-cover md:h-28 md:w-24"/>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
