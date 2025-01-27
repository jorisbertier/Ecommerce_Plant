import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server";

export async function GET() {
    try {

    const plants = await prisma.plant.findMany()
    console.log(plants)

    return NextResponse.json(plants, { status: 200});

    } catch (error) {
        console.log("Error fetching plants", error);
        return NextResponse.json({ error: "Failed to fetch plants" }, { status: 500 });
    }
}

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

        return NextResponse.json(plant, { status: 201});
        } catch (error) {
            console.log('Error creating a plant',error)
        return NextResponse.json({ error: "Failed to create plant" }, { status: 500 });
        }
    }
    