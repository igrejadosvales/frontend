'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

const navLinks = [
    {name: 'Bebidas', href: '/icoffee/drinks', title: 'escolha sua bebida favorita!'},
    {name: 'Doces', href: '/icoffee/sweets', title: 'escolha seu doce favorito!'},
    {name: 'Salgados', href: '/icoffee/snacks', title: 'escolha seu salgado favorito!'},
]

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="pb-4 w-full">
            <div className='flex justify-start pb-5 gap-5 items-center'>
                <div className=''>
                    <Link href={'#'}>
                        <Image src={'/icoffee/iCoffee.png'} alt='Logo iCoffee' width={150} height={150}></Image>
                    </Link>
                </div>
                {
                    navLinks.map((link) => {
                        const titleActive = pathname.startsWith(link.href)
                         return(
                            <h2 className={`${titleActive ? 'bg-gradient-to-r from-textIcoffee to-colorOrange bg-clip-text text-transparent font-semibold text-xl max-w-[161px]' : 'hidden'}`} key={link.href}>
                                {link.title}
                            </h2>
                        )
                    })
                }
            </div>

            <nav className="w-full flex justify-between">
                {
                    navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href)
                        return(
                            <Link className={`${isActive ? 'bg-colorOrange rounded-xl' : 'bg-transparent'}`} key={link.href} href={link.href}>
                                <button className={`${isActive ? 'py-[2px] px-6 border-2 border-transparent rounded-xl text-white font-medium max-[365px]:px-4' : 'py-[2px] px-6 border-2 border-textIcoffee rounded-xl text-textIcoffee font-medium max-[365px]:px-4'}`}>{link.name}</button>
                            </Link>
                        )
                    })
                }
                
            </nav>
        </header>
    )
}