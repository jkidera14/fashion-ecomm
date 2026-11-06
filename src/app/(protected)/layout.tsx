import { getCurrentUser } from "@/server-actions/auth/getCurrentUser";
import { redirect } from "next/navigation";


export default async function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/signin");
    }
    return (
        <>{children}</>
    )
}
