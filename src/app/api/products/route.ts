import { prisma } from "@/database/db";
import { Category, ProductType, Size } from "@/generated/prisma/enums";
import { requireAdmin } from "@/server-actions/auth/require-admin";
import { uploadImages } from "@/services/uploadImages";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        await requireAdmin();

        const formData = await request.formData();

        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const price = Number(formData.get("price"));
        const stock = Number(formData.get("stock"));
        const category = formData.get("name") as Category;
        const productType = formData.get("productType") as ProductType;
        const bestSeller = formData.get("bestSeller") === "true";
        const sizes = formData.getAll("sizes") as Size[];
        const colors = formData.getAll("colors").map((color) => JSON.parse(color as string) as {
            name: string,
            value: string
        });

        const images = formData.getAll("images") as File[];

        // Upload The Images
        const imageUrls = await uploadImages(images);

        //Save the Product
        const product = await prisma.product.create({
            data: {
                name,
                description,
                price,
                category,
                productType,
                bestSeller,
                stock,

                images: {
                    create: imageUrls.map((image) => ({
                        imageUrl: image.ImageUrl,
                        publicId: image.publicId
                    }))
                },

                sizes: {
                    create: sizes.map((size) => ({
                        size
                    }))
                },

                colors: {
                    create: colors.map((colors) => ({
                        name: colors.name,
                        value: colors.value
                    }))
                }
            }
        });

        return NextResponse.json({
            success: true,
            message: "Product Created Successfully",
            productId: product.id
        }, {
            status: 201,
        })

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: "Something Went Wrong!",
            },
            { status: 500 },
        );
    }
}