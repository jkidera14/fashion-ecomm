import { prisma } from "@/database/db";

export async function getLatestProducts() {
    try {
        const products = await prisma.product.findMany({
            take: 10,
            include: {
                images: {
                    take: 1,
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            },
            orderBy: {
                createdAt: "desc",
            }
        })

    } catch (error) {
        console.error("Failed to Fetch Latest products:", error);

        return [];
    }
}