import { prisma } from "@/database/db";
import { OrderStatus, PaymentMethod, PaymentStatus } from "@/generated/prisma/enums";

interface CreateOrderInput {
    userId: string;

    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    status?: OrderStatus;

    shippingAddress: {
        firstName: string;
        lastName: string;
        phone: string;
        street: string;
        city: string;
        state: string;
        country: string;
    };


    cartItems: {
        productId: string;
        quantity: number;
        size: string;
        color: string;
    }[];

    stripeSessionId?: string | null;
}

export async function createOrder(data: CreateOrderInput) {
    const productIds = [...new Set(data.cartItems.map((item => item.productId)))];

    const products = await prisma.product.findMany({
        where: {
            id: {
                in: productIds
            }
        }
    });

    if (products.length !== productIds.length) {
        throw new Error("One or More Products No Longer Exists.");
    }
    let subtotal = 0

    const orderItems = data.cartItems.map((item) => {
        const product = products.find((p) => p.id === item.productId)


        if (!product) {
            throw new Error("Product Not Found!");
        }

        if (product.stock < item.quantity) {
            throw new Error(`${product.name} is out of stock.`);
        }
    })
}