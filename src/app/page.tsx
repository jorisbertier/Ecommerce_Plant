
import ItemCard from "@/components/itemCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

      <div className="flex w-full h-screen">
        <div className="w-2/5 flex items-center justify-center flex-col gap-10 text-left p-16">
          <h1 className="text-6xl font-extrabold">Look <span className="text-custom-green">Natural</span> With Plantings </h1>
          <p>With planting you will be able to find your dream plant and Planting will find the best choice of plants for your home decoration to make it look fresh and more natural</p>
          <Button variant='greenbg' size='lg'>Explore more</Button>
        </div>
        <div className="w-3/5 h-4/5 flex justify-center relative">

        {/* <div className="w-60 h-14 flex justify-around items-center shadow-lg rounded-lg absolute top-0 right-20 z-10">
          <Image src="/cactus.jpeg" width={40} height={40} alt="cactus" className="object-contain rounded-md"/>
          <div>
            <h4 className="text-gray-400">Indoor</h4>
            <h3 className="font-bold">Cactus Lilly</h3>
          </div>
          <div className="bg-custom-green text-center p-1 flex items-center justify-center rounded-md">
            <Image src="/icons8-bag-48.png" width={20} height={20} alt="shopping bag"/>
          </div>
        </div> */}
          <ItemCard title="Cactus Lilly" src="/cactus.jpeg" top={90} right={60}/>
          <ItemCard title="Deliciosa" src="/monstera.jpeg" bottom={50} left={60}/>
          <Image width={600} height={600} className="object-contain m-10" alt="image principale" src='/origin.png'></Image>
        </div>
      </div>
  );
}
