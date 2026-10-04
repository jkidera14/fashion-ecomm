import FrontendLayout from "@/components/layouts/FrontendLayout";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiMapPin, FiPackage, FiUser } from "react-icons/fi";


export default function AccountPage() {
    return (
        <FrontendLayout>
            <section className="mx-auto max-w-5xl py-12">
                <div>
                    <BreadCrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Account" }
                    ]} />
                    <p className="text-muted-foreground mt-2">
                        Manage your profile, orders and account.
                    </p>
                </div>
                <div className="mt-10 space-y-6">
                    {/* Profile */}
                    <div className="rounded-2xl border border-border p-6">
                        <div className="mb-6 flex items-center gap-3">
                            <FiUser className="text-primary" size={22} />
                            <h2 className="text-xl font-semibold">
                                Profile Information
                            </h2>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Full Name
                                </p>
                                <p className="font-medium">
                                    Jane Doe
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Email
                                </p>
                                <p className="font-medium">
                                    jane@gmail.com
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Phone
                                </p>
                                <p className="font-medium">
                                    +254 700 000 000
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Member Since
                                </p>
                                <p className="font-medium">
                                    January 2026
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center gap-4">
                            <Link href="/account/edit">
                                <Button leftIcon={<FaUser />}>
                                    Edit Profile
                                </Button>
                            </Link>
                            <Link href="/account/orders">
                                <Button variant="outline" leftIcon={<FiPackage />}>
                                    My Orders
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="rounded-2xl border border-border p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <FiMapPin className="text-primary" size={22} />

                            <h2 className="text-xl font-semibold">
                                Shipping Address
                            </h2>
                        </div>

                        <div className="space-y-1">
                            <p>Muindi Way</p>
                            <p>Phase 2 Road</p>
                            <p>Nakuru, Kenya</p>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    )
}
