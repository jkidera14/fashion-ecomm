import FrontendLayout from "@/components/layouts/FrontendLayout";
import FilterOptions from "@/components/shop/FilterOptions";
import { Category, ProductType } from "@/generated/prisma/enums";
import { Suspense } from "react";
import ShopProducts from "@/components/shop/ShopProducts";

interface ShopPageProps {
    searchParams: Promise<{
        category?: Category;
        productTypes?: ProductType;
        sort?: "low-high" | "high-low" | "newest" | "oldest";
    }>
}



export default async function page({ searchParams }: ShopPageProps) {
    const params = await searchParams
    return (
        <FrontendLayout>
            <div className="flex flex-col sm:flex-row gap-5 my-10">
                <FilterOptions />
                <div className="flex-1">
                    <div className="flex justify-between items-center text-base
                        sm:text-2xl mb-4">
                        <h2 className="text-primary font-semibold">Shop</h2>

                        <select className="border border-border text-sm p-3">
                            <option value="low-high">Sort By: Low to High</option>
                            <option value="high-low">Sort By: High to Low</option>
                        </select>
                    </div>

                    <Suspense>
                        <ShopProducts />
                    </Suspense>
                </div>
            </div>
        </FrontendLayout>
    )
}
