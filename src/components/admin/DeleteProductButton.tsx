"use client"

import { deleteProduct } from "@/server-actions/product/deleteProduct";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

interface DeleteProductButtonProps {
    productId: string
}

export default function DeleteProductButton({ productId }: DeleteProductButtonProps) {

    const router = useRouter();

    const [isDeleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this product?",
        );
        if (!confirmed) return;

        try {
            setDeleting(true);

            const result = await deleteProduct(productId);

            if (!result.success) {
                return toast.error(result.message);
            }

            toast.success(result.message);
            router.refresh();

        } catch (error) {
            toast.error("Something Went Wrong.");

        } finally {
            setDeleting(false);
        }
    }

    return (
        <button onClick={handleDelete} disabled={isDeleting}
            className="rounded-lg p-2 text-destructive transition hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-50">
            {isDeleting ? "Deleting...." : <FaTrashAlt />}

        </button>
    )
}
