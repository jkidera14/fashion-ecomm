import { Category, ProductType } from "@/generated/prisma/enums";
import { getShopProducts } from "@/server-actions/product/getShopProducts";
import EmptyState from "../ui/EmptyState";
import ProductCard from "../products/ProductCard";

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
        return (
            <EmptyState title="No Products Found" subTitle="Try changing your filters or check back later" />
        )
    }

    return (
        <>
            <p className="mb-6 text-sm text-muted-foreground">
                Showing {products.length} product{products.length !== 1 && "s"}
            </p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={{
                        id: product.id,
                        name: product.name,
                        image: product.images[0].imageUrl,
                        price: product.price,
                    }} />
                ))}
            </div>

        </>
    )
}
