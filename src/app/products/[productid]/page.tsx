import FrontendLayout from '@/components/layouts/FrontendLayout';
import ProductPageComponent from '@/components/products/ProductPageComponent';
import { getProduct } from '@/server-actions/product/getProduct';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

interface ProductPageProps {
    params: Promise<{
        productid: string
    }>
}

export default async function ProductPage({ params }: ProductPageProps) {

    const { productid } = await params;
    return (
        <FrontendLayout>
            <Suspense fallback={<p>Loading...</p>}>
                <ProductContent productId={productid} />
            </Suspense>
        </FrontendLayout>
    )
}
async function ProductContent({ productId }: { productId: string }) {
    const product = await getProduct(productId);

    if (!product) {
        notFound();
    }
    return <ProductPageComponent product={product} />
}



