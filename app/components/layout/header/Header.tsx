import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return ( 
      <header className="w-full h-header p-5 text-black bg-background-header bg-right flex flex-col items-center">
        <div className="">
          <Image className="max-[830px]:w-16" width="120" height="120" src="icons/logoIVLS.svg" alt="logo" />
        </div>
        <div className="flex flex-col h-full justify-center items-center text-white">
          <div className="flex mb-6 max-[410px]:flex-col max-[410px]:items-center">
            <h2 className="text-8xl w-[535px] max-[830px]:text-5xl max-[830px]:w-[265px]">Aqui é a sua</h2>
            <span className="text-8xl change-text ml-1 w-[200px] max-[830px]:text-5xl max-[830px]:w-[110px]">casa</span>
          </div>
          <Link href={'https://www.instagram.com/ivalesonline'} target="_blank"><button className="border p-4 rounded-lg">celebrações</button></Link>
        </div>
      </header>
    );
  }
  