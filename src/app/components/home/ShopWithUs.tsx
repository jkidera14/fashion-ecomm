import { FiHeadphones, FiRefreshCw, FiRotateCcw } from "react-icons/fi"
import SectionHeader from "../ui/SectionHeader"

const features = [
    {
        icon: FiRefreshCw,
        title: "Easy Exchange",
        description: "Exchange your items quickly and hassle-free with our simple process."
    },
    {
        icon: FiRotateCcw,
        title: "7-Day Returns",
        description: "Not satisfied with your purchase? Return your order within 7 days for a full refund."

    },
    {
        icon: FiHeadphones,
        title: "Best Support",
        description: "Our dedicated support team is here to assist you with any questions or concerns."
    }
]

export default function ShopWithUs() {
    return (
        <section className="py-12">
            <SectionHeader title="Why Shop With Us?" subtitle="We are committed to providing you with the best 
            shopping experience with premium quality products and exceptional customer service." />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 py-6">
                {features.map((feature) => {
                    const Icon = feature.icon
                    return (
                        <div key={feature.title} className="rounded-2xl p-8 text-center transition-all
                         duration-300 hover:-translate-y-1">
                            <div className="mx-auto flex h-16 w-16 items-center
                             justify-center rounded-full bg-primary/10">
                                <Icon className="text-primary" size={30} />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-foreground">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}
