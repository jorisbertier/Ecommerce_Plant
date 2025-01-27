import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'

type Props = {
    title: string;
    src: string;
    price: number;
}
function CardPlant({price, src, title} : Props) {
    return (
        <div className=" bg-red-400 rounded-3xl shadow-xl" style={{position: "relative", height: '100%', width: '200px'}}>
            <div style={{position: "relative", height: '100%', width: '200px'}}>
                <Image width={0} height={0} sizes ="100vh" style={{height: '100%', width: '100%' }} src={`${src}`} alt="plant" className="rounded-3xl object-contain w-20"/>
            </div>
            <h2 className="font-bold text-black -rotate-90 absolute top-28 -left-4">{title}</h2>
            <span className="absolute top-2 right-4 font-bold">${price}</span>
            <Button className="absolute bottom-2 left-2">Add to Cart</Button>
            <div className="rounded-full bottom-2 right-4 absolute bg-black h-10 w-10 flex justify-center items-center">
                <Heart color="#fff"/>
            </div>
        </div>
    )
}

export default CardPlant