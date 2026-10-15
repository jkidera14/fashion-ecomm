import Link from "next/link";
import { FiBox, FiHome, FiPackage } from "react-icons/fi";
import { LuCirclePlus } from "react-icons/lu";

const navigation = [
    {
        title: "MAIN",
        items: [
            {
                href: "/admin",
                label: "Dashboard",
                icon: FiHome,
            },
        ],
    },
    {
        title: "CATALOG",
        items: [
            {
                href: "/admin/products",
                label: "Products",
                icon: FiPackage,
            },
            {
                href: "/admin/add-product",
                label: "Create Product",
                icon: LuCirclePlus,
            },
        ],
    },
    {
        title: "SALES",
        items: [
            {
                href: "/admin/orders",
                label: "Orders",
                icon: FiBox,
            },
        ],
    },
];

export default function SidebarContent() {
    return (
        <>
            <div className="border border-border px-6 py-6">
                <Link href="/admin" className="text-2xl font-semibold">Admin Panel</Link>
            </div>

            {/* Navigation*/}
            <div className="flex-1 overflow-y-auto px-4 py-6">
                {navigation.map((section) => (
                    <div key={section.title} className="mb-8">
                        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">

                        </p>
                    </div>
                ))}
            </div>

        </>
    )
}
