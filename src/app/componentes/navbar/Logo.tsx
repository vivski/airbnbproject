'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

// componente para logo sera criado aqui :)
const Logo = () => {
    const router = useRouter();
    return (
        <Image 
        alt="logo"
        className="hidden md:block cursor pointer"
        height="100"
        width="100"
        src="/images/logo.png"
        />
    )
}

export default Logo;