"use client"

import Link from "next/link"
import CardPlant from "@/components/CardPlant";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withauth";

interface Plant {
    id: number;
    title: string;
    price: number;
    image: string;
}

function Dashboard() {

    const [ plants, setPlants] = useState<Plant[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // const { data: session, status } = useSession();
    // const router = useRouter();
  
    // useEffect(() => {
    //   if (status === 'unauthenticated') {
    //     router.replace('/login');
    //   }
    // }, [status, router]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await fetch('/api/plant');
                const data = await response.json()
                setPlants(data)
            }catch(error) {
                console.log(error)
            }finally {
                setIsLoading(false)
            }
        }
        fetchPlants()
    }, [])
    if(isLoading) {
        return(
            <div className="flex gap-5 w-full h-screen justify-center items-center">
                    <ClipLoader
                        color={'#000'}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
            </div>
        )
    }
    // if (status === 'loading') {
    //     return <p>Chargement...</p>; // Empêche le flash de contenu
    //   }
    
    //   if (!session) {
    //     return null; // Évite d'afficher du contenu non sécurisé
    //   }
    
    
    return (
        <div className="flex flex-col gap-5 mt-20">
            <h1 className="text-5xl font-extrabold text-center p-4">
                Plant Created by COMMUNITY
                </h1>
            <div className="w-full flex justify-center">
                <Link href="/create">
                    <Button variant='green'>Create a plant</Button>
                </Link>
            </div>
            {plants.length == 0 && <div className="w-full flex justify-center"><h1>No plants added for the community</h1></div>}
            <div className="w-full flex flex-wrap justify-around mb-10 gap-20">
                {Object.values(plants.map(((plant )=> (
                    <CardPlant key={plant.id} title={plant?.title} src={plant?.image} price={plant.price}/>
                )) ))}
            </div>
        </div>
    )
}

export default withAuth(Dashboard)