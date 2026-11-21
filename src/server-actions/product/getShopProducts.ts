"use server"

import { Category, ProductType } from "@/generated/prisma/enums"

interface GetProductParams {
    categories?: Category[],
    productTypes?: ProductType[],
    sort?: "low-high" | "high-low" | "newest" | "oldest";
}

export async function getShopProducts({ categories = [], productTypes = [], sort = "newest" }: GetProductParams) {
    try {

    } catch (error) {

    }
}