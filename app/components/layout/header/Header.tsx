import Image from "next/image";

export default function Header() {
    return ( 
      <header className="w-full h-header p-5 text-black bg-background-header flex flex-col items-center">
        <div className="">
          <Image width="120" height="120" src="icons/logoIVLS.svg" alt="logo" />
        </div>
        <div className="flex flex-col h-full justify-center items-center text-white">
            <h1 className="text-8xl">Aqui é a sua
            </h1>
            <h2 className="text-8xl change-text mb-5"> casa</h2>
          <a href="#"><button className="border p-4 rounded-lg">celebrações</button></a>
        </div>
      </header>
    );
  }
  