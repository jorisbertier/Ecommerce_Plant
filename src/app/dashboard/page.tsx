"use client"

import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { Heart } from 'lucide-react';
import Image from "next/image"
import Link from "next/link"
import CardPlant from "@/components/CardPlant";

function Dashboard() {

    const { data: session} = useSession()
    console.log(session)
    return (
        <div className="flex flex-col gap-5 mt-20">
            <h1>Plant Created by COMMUNITY</h1>
            <Link href="/create">Create a plant</Link>
            <div className="w-full flex flex-wrap justify-around mb-10 gap-20">
               <CardPlant title={'Monstera'} src={'/monstera2.jpg'} price={39}/>
               <CardPlant title={'Monstera'} src={'/monstera2.jpg'} price={39}/>
               <CardPlant title={'Monstera'} src={'/monstera2.jpg'} price={39}/>
            </div>
        </div>
    )
}

export default Dashboard