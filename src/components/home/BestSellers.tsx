import SectionHeader from "../ui/SectionHeader";
import ProductCard from "../products/ProductCard";
import { Suspense } from "react";
import { getBestSellerProducts } from "@/server-actions/product/getBestSellerProducts";
import ProductCardSkeleton from "../loading/skeletons/ProductCardSkeleton";

export const dynamic = "force-dynamic";

export default function BestSellers() {
    return (
        <section>
            <SectionHeader
                title="Best Sellers"
                subtitle="Discover our most-loved pieces, carefully selected
                    by Thousands of happy customers. Timeless styles designed to 
                    elevate your wardrobe and make a statement."
            />
            <Suspense fallback={<ProductCardSkeleton number={5} />}>
                <BestSellersContent />
            </Suspense>
        </section>
    )
}
async function BestSellersContent() {
    const products = await getBestSellerProducts();
    return (
        <div className="my-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 
                                    lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                    <ProductCard product={{
                        id: product.id,
                        name: product.name,
                        image: product.images[0].imageUrl,
                        price: product.price,
                    }} key={product.id} />
                ))}

            </div>
        </div>
    )
}