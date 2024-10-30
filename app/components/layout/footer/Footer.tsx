import Image from "next/image";

export default function Footer() {
  return ( 
    <footer className="w-full bg-footer text-white">
      <div className="max-w-screen-xl m-auto flex flex-col justify-between h-full pb-10 px-5">
        <div className="flex flex-col gap-2 mb-10">
          <div>
            <a href="#">
              <Image src='icons/logoIVLS.svg' width={50} height={50} alt="logo footer"/>
            </a>
          </div>
          <div>
            <h4 className="font-bold">Domingos</h4>
            <p className="text-sm">Cultos às 10:00, 17:00 e às 19:30 horas.</p>
          </div>
          <div>
            <h4 className="font-bold">Quartas</h4>
            <p className="text-sm">Cultos às 20:00 horas.</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Localização</h4>
          <p className="text-sm">R. Santa Clara, 192 - Santa Fe, Gravataí - RS, 94010-972</p>
        </div>
      </div>
    </footer>
  );
}
