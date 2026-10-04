import FrontendLayout from "@/components/layouts/FrontendLayout";
import BreadCrumb from "@/components/ui/BreadCrumb";


export default function EditProfilePage() {
    return (
        <FrontendLayout>
            <section className="mx-auto max-w-4xl py-12">
                <BreadCrumb items={[
                    {
                        label: "Home",
                        href: "/"
                    },
                    {
                        label: "Account",
                        href: "/account"
                    },
                    {
                        label: "Edit"
                    }
                ]} />

                <p className="text-muted-foreground mt-2">
                    Edit your profile.
                </p>

                <form className="mt-10 space-y-8">
                    {/* Personal Information */}
                    <div className="rounded-2xl border border-border p-6">
                        <h2 className="text-xl font-semibold">
                            Personal Information
                        </h2>
                    </div>
                </form>
            </section>
        </FrontendLayout>
    )
}
