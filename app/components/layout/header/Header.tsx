import Image from "next/image";

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
          <a href="#"><button className="border p-4 rounded-lg">celebrações</button></a>
        </div>
      </header>
    );
  }
  