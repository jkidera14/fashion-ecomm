"use server"

import { prisma } from "@/database/db";
import { requireAdmin } from "../auth/require-admin";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function deleteProduct(productId: string) {
    try {
        await requireAdmin();

        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                images: true
            }
        });
        if (!product) {
            return {
                success: false,
                message: "Product not Found."
            };
        }

        // delete product images from cloud
        await Promise.all(
            product.images.map((image) => cloudinary.uploader.destroy(image.publicId),
            ),
        );

        // Delete the product
        await prisma.product.delete({
            where: {
                id: productId
            }
        });

        revalidatePath("/admin/products");
        return {
            success: true,
            message: "Product Deleted Successfully.",
        };

    } catch (error) {
        console.error("Failed to Delete Product:", error);

        return {
            success: false,
            message: "Failed to delete product."
        };
    }
}