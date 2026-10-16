import { title } from "process"
import { FiPackage, FiShoppingBag, FiUsers } from "react-icons/fi";

const stats = [
    {
        title: "Total Users",
        value: "1,245",
        icon: FiUsers,
    },
    {
        title: "Total Products",
        value: "156",
        icon: FiPackage,
    },
    {
        title: "Total Orders",
        value: "428",
        icon: FiShoppingBag,
    },
];
export default function DashboardPage() {
    return (
        <section>
            <div>
                <h2 className="text-3xl font-semibold">
                    Dashboard
                </h2>
            </div>
        </section>
    )
}
