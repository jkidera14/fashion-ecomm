import { PaymentMethod } from "@/generated/prisma/enums";
import { getCurrentUser } from "../auth/getCurrentUser";
import { success } from "zod";

interface PlaceOrderInput {

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

    paymentMethod: PaymentMethod;
}


export async function placeOrder(data: PlaceOrderInput) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return {
                success: false,
                message: "Please Login First.",
            };
        }

        if (data.cartItems.length === 0) {
            return {
                success: false,
                message: "Your Cart is Empty.",
            }
        }

    } catch (error) {
        console.error(error);


        return {
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Unable to Place Order."
        }
    }
}