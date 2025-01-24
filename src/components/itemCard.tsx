import Image from 'next/image'
import React from 'react'

type Props = {
    src: string;
    title: string;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}

function ItemCard({src, top, left,right, title, bottom}: Props) {
    return (
        <div className="w-60 h-14 flex justify-around items-center shadow-lg rounded-lg absolute z-10" style={{top: top, left: left, right: right, bottom: bottom}}>
            <Image src={src} width={40} height={40} alt="cactus" className="object-contain rounded-md"/>
            <div>
                <h4 className="text-gray-400">Indoor</h4>
                <h3 className="font-bold">{title}</h3>
            </div>
            <div className="bg-custom-green text-center p-1 flex items-center justify-center rounded-md">
                <Image src="/icons8-bag-48.png" width={20} height={20} alt="shopping bag"/>
            </div>
        </div>
    )
}

export default ItemCard