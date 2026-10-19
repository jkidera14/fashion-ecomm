"use client"

import { useState } from "react";

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
    return (
        <div>AddProductPage</div>
    )
}
