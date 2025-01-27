import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { title, price, image, userEmail } = await req.json();
        console.log("Received data:", { title, price, image, userEmail });
    
        const plant = await prisma.plant.create({
            data: {
            title,
            price,
            image,
            userEmail,
            },
        });

        return NextResponse.json(plant);
        } catch (error) {
            console.log('Error creating a plant',error)
        return NextResponse.json({ error: "Failed to create plant" }, { status: 500 });
        }
    }
    