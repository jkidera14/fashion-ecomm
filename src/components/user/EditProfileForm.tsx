import React from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'

export default function EditProfileForm() {
    return (
        <form className="mt-10 space-y-8">
            {/* Personal Information */}
            <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">
                    Personal Information
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input label="Full Name" placeholder="John Doe" />
                    <Input label="Phone Number" placeholder="812 212 6789" />
                    <div className="md:col-span-2">
                        <Input label="Email Address" placeholder="Jane@gmail.com" />
                    </div>
                </div>
            </div>
            {/* Shipping Address */}
            <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold">
                    Shipping Address
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input label="Country" />
                    <Input label="State" />
                    <Input label="City" />
                    <Input label="Postal Code" />
                    <div className="md:col-span-2">
                        <Input variant="textarea" label="Street Address" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button>
                    Save Changes
                </Button>
            </div>
        </form>
    )
}
