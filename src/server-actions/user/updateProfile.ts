
"use server"

import { EditProfileFormValues } from "@/components/user/EditProfileForm";
import { getCurrentUser } from "../auth/getCurrentUser";
import { prisma } from "@/database/db";
import { revalidatePath } from "next/cache";


export async function updateProfile(data: EditProfileFormValues) {

    try {

        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return {
                success: false,
                message: "Unauthorized.",
            };
        }

        await prisma.$transaction(async (tx) => {
            //Update the User
            await tx.user.update({
                where: { id: currentUser.id },
                data: {
                    name: data.name,
                    phone: data.phone
                }
            });

            //Get the Users Default Address
            const defaultAddress = await tx.address.findFirst({
                where: {
                    id: currentUser.id,
                    isDefault: true
                }
            });

            if (defaultAddress) {
                await tx.address.update({
                    where: { id: defaultAddress.id },
                    data: {
                        firstName: data.firstname,
                        lastName: data.lastname,
                        phone: data.phone,
                        street: data.street,
                        city: data.city,
                        state: data.state,
                        country: data.country,
                        postalCode: data.postalCode,
                    }
                })
            } else {
                //Create a default address for user if none exists
                await tx.address.create({
                    data: {
                        firstName: data.firstname,
                        lastName: data.lastname,
                        phone: data.phone,
                        street: data.street,
                        city: data.city,
                        state: data.state,
                        country: data.country,
                        postalCode: data.postalCode,
                        isDefault: true,
                        userId: currentUser.id,
                    }
                })
            }
        });

        revalidatePath("/account");
        revalidatePath("/account/edit");

        return {
            success: true,
            message: "Profile Updated Successfully!",
        }
    } catch (error) {
        console.error("Failed to update profile:", error);

        return {
            success: false,
            message: "Failed to Update Profile.",
        };
    }
}