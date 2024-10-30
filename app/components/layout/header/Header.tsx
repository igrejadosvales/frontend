import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return ( 
      <header className="w-full h-header p-5 text-black bg-background-header flex flex-col items-center">
        <div className="">
          <Image width="120" height="120" src="icons/logoIVLS.svg" alt="logo" />
        </div>
        <div className="flex flex-col h-full justify-center items-center text-white">
          <div className="flex mb-8">
            <h2 className="text-8xl w-[535px]">Aqui é a sua</h2>
            <span className="text-8xl change-text ml-1 w-[200px]">casa</span>
          </div>
          <Link href={'https://www.instagram.com/ivalesonline'} target="_blank"><button className="border p-4 rounded-lg">celebrações</button></Link>
        </div>
      </header>
    );
  }
  