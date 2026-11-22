import { Category, ProductType } from "@/generated/prisma/enums";
import { getShopProducts } from "@/server-actions/product/getShopProducts";

interface ShopProducts {
    searchParams: {
        category?: Category;
        productType?: ProductType;
        sort?: "low-high" | "high-low" | "newest" | "oldest";
    }
}

export default async function ShopProducts({ searchParams }: ShopProducts) {
    const products = await getShopProducts({
        categories: searchParams.category?.split(",") as | Category[] | undefined,
        productTypes: searchParams.productType?.split(",") as | ProductType[] | undefined,
        sort: searchParams.sort
    });

    if (products.length === 0) {

    }

    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {dummyShopProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
