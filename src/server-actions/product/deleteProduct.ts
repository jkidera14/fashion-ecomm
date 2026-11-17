import { prisma } from "@/database/db";
import { requireAdmin } from "../auth/require-admin";

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
    } catch (error) {
        console.error("Failed to Delete Product:", error);

        return {
            success: false,
            message: "Failed to delete product."
        };
    }
}