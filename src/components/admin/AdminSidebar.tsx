

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
                icon: LuCirclelus,
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

export default function AdminSidebar() {
    return (
        <div>AdminSidebar</div>
    )
}
