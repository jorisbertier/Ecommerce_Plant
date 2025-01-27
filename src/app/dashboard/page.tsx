"use client"

import Link from "next/link"
import CardPlant from "@/components/CardPlant";
import { useEffect, useState } from "react";

interface Plant {
    id: number;
    title: string;
    price: number;
    image: string;
}

function Dashboard() {

    const [ plants, setPlants] = useState<Plant[]>([])

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await fetch('/api/plant');
                const data = await response.json()
                setPlants(data)
            }catch(error) {
                console.log(error)
            }
        }
        fetchPlants()
    }, [])

    const plantsFormatted = Object.values(plants);
    console.log(typeof plantsFormatted)
    return (
        <div className="flex flex-col gap-5 mt-20">
            <h1>Plant Created by COMMUNITY</h1>
            <Link href="/create">Create a plant</Link>
            {plants.length == 0 && <div className="w-full flex justify-center"><h1>No plants added for the community</h1></div>}
            <div className="w-full flex flex-wrap justify-around mb-10 gap-20">
                {Object.values(plants.map(((plant )=> (
                    <CardPlant key={plant.id} title={plant?.title} src={plant?.image} price={plant.price}/>
                )) ))}
            </div>
        </div>
    )
}

export default Dashboard