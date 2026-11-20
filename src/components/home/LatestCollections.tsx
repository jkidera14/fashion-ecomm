import { dummyLatestCollections } from "@/constants/dummyProducts";
import SectionHeader from "../ui/SectionHeader";
import ProductCard from "../products/ProductCard";
import { Suspense } from "react";
import { getLatestProducts } from "@/server-actions/product/getLatestProducts";


export default function LatestCollections() {
    return (
        <section>
            <SectionHeader
                title="Latest Collections"
                subtitle="Discover our Newest Weekly Arrivals and Exclusive Designs."
            />

            <Suspense fallback={<p>Loading....</p>}>
                <LatestCollectionsContent />
            </Suspense>
        </section>
    );
}
async function LatestCollectionsContent() {
    const products = await getLatestProducts();
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