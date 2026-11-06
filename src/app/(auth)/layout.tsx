import { getCurrentUser } from "@/server-actions/auth/getCurrentUser";
import { redirect } from "next/navigation";


export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();

    if (currentUser) {
        redirect("/account");
    }
    return (
        <>{children}</>
    )
}
