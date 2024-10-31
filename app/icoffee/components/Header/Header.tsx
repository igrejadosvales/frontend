import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="pb-4 w-full">
            <div className='w-full flex justify-center pb-4'>
                <Link href={'#'}>
                    <Image src={'/icoffee/iCoffee.png'} alt='Logo iCoffee' width={230} height={230}></Image>
                </Link>
            </div>
            <h2> escolha seu
            energético favorito!</h2>

            <nav className="w-full flex justify-between">
                <button>bebidas</button>
                <button>doces</button>
                <button>salgados</button>
            </nav>
        </header>
    )
}