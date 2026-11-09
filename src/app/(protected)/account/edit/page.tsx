import FrontendLayout from "@/components/layouts/FrontendLayout";
import BreadCrumb from "@/components/ui/BreadCrumb";
import EditProfileForm from "@/components/user/EditProfileForm";


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

                <EditProfileForm />
            </section>
        </FrontendLayout>
    )
}
