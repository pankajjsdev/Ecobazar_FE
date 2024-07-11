'use client'

/* eslint-disable react-hooks/rules-of-hooks */

import Image from "next/image";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

// Define the schema
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    companyName: z.string().optional(),
    email: z.string().email({
        message: "Email must be valid.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    notes: z.string().optional(),
});

export default function Page() {
    const [isEditing, setIsEditing] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            companyName: "",
            address: "",
            country: "",
            state: "",
            zip: "",
            email: "",
            phone: "",
            notes: "",
        },
    });

    // Define the submit handler
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
        <h1 className="text-2xl font-bold">Account Settings</h1>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl">{isEditing ? "Edit Profile" : "View Profile"}</h1>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <MdOutlineCancel  size={30} className="text-gray-gray3 hover:text-gray-gray4"/>: <FaEdit size={30}  className="text-gray-gray3 hover:text-gray-gray4"/>}
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    {isEditing ? (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your first name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your last name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your phone number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your company name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="notes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Notes</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your notes" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="bg-primary-primary rounded-full text-white text-[14px] py-6 font-semibold px-9">
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    ) : (
                        <div>
                            <p className="p-3 border-2 border-gray-gray1 rounded my-3"><span>First name:</span> {'Dianne'}</p>
                            <p className="p-3 border-2 border-gray-gray1 rounded my-3"><span>Last name:</span> {'Dianne'}</p>
                            <p className="p-3 border-2 border-gray-gray1 rounded my-3"><span>Email:</span> {'xyz@gmail.com'}</p>
                            <p className="p-3 border-2 border-gray-gray1 rounded my-3"><span>Phone:</span> {'+911234567890'}</p>
                            <p className="p-3 border-2 border-gray-gray1 rounded my-3"><span>Company name:</span> {'xyz company'}</p>
                            <p className="p-3 border-2 border-gray-gray1 rounded my-3"><span>Notes:</span> {'customer'}</p>
                        </div>
                    )}
                </div>

                <div className="text-center flex flex-col items-center group">
                    <Image
                        src="/images/user/user.png"
                        width={150}
                        height={150}
                        alt=""
                    />
                   {isEditing && <button className="border-2 border-primary-primary rounded-full px-3 py-2 my-3">
                        Choose Image
                    </button>}
                </div>
            </div>
        </>
    );
}
