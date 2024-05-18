// componentes/Card.js
'use client'
import Image from "next/image";
import HeartButton from "./HeartButton";

interface CardProps {
    imageSrc: string;
    city: string;
    country:string;
    type:string;
    price:string;


}


const Card: React.FC<CardProps> = ({ imageSrc, city,country,type, price }) => {
  return (
    <div className="
    col-span-1
    cursor-pointer
    ">
    <div className="flex flex-col gap-2 w-full">

    <div className="
    aspect-square
    w-full
    relative
    overflow-hidden
    rounded-xl
    ">
      <Image 
      src={imageSrc}
      alt={city}
      width={200} 
      height={200} 
      className="object-cover
      h-full
      w-full
      group-hover:scale-110
      transition" 
      />
      <div className="absolute top-3 right-3">
        <HeartButton />
      </div>
    </div>
      <div className="text-xl font-semibold">{city}, {country}</div>
      <div className="font-light text-neutral-500">{type}</div>
      <div className="font-semibold">{price}</div>

       </div>
    </div>
  );
};

export default Card;