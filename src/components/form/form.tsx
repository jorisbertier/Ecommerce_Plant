"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader } from "@/components/ui/card"
import { useSession } from "next-auth/react"

const formSchema = z.object({
    title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
    }),
    price:
    z.number()
    .gte(1, {
    message: "Price not be inferior to 1",
    })
    .lte(300, {
    message: "Price not be superior to 300",
    }),
    image: z.string().min(5, {
    message: "Source image must be at least 5 characters.",
    }),
})


function FormPlant() {

    const { data: session} = useSession()

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: "",
        price: 0,
        image: "",
    },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {

        if (!session || !session.user || !session.user.email) {
            console.error("User is not authenticated")
            return
        }

        try {
            const response = await fetch("/api/plant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: values.title,
                price: Number(values.price),
                image: String(values.image),
                userEmail: session.user.email,  
            }),
            })
        
            const data = await response.json()
            return data

        } catch(error) {
            console.error("Error:", error)
        }
    }
    return (
        <>
            <Card className="w-[450px] p-6 text-2xl">
            <CardHeader className="w-full text-center text-black font-bold ">
            Create a plant for sell
            </CardHeader>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Title Field */}
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                    <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
                )}
            />

            {/* Price Field */}
            <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                    <Input type="number" placeholder="Price" defaultValue={field.value || 0} onChange={(e) => field.onChange(parseFloat(e.target.value))}  />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            {/* Image Field */}
            <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                    <Input placeholder="Source image" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
                )}
            />
                        <Button variant='green' type="submit">Submit</Button>
            </form>
            </Form>
        </Card>
        </>
    )
}

export default FormPlant