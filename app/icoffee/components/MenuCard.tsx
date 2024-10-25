import Image from "next/image";

type Drink = {
  title: string,
  subtitle: string,
  backgroundColor: string,
  textColor: string,
  price: string
}

export default function MenuCard(props: Drink) {

    return ( 
      <div className="bg-white rounded-borderDrink border px-6 py-4 flex justify-between mb-4">
        <div className="flex flex-col justify-between">
          <div className="">
            <h3 className="font-bold text-black mb-1">{props.title}</h3>
            <span className="text-xs py-1 px-2 font-bold rounded-borderDrink text-center" 
            style={{background: props.backgroundColor, color: props.textColor }}>
              {props.subtitle}</span>
          </div>
          <span className="font-semiboldbold text-xl text-black">{props.price}</span>
        </div>
        <div className="border rounded-borderDrink">
            <Image width={150} height={150} src={'/icoffee/drinks/monster.webp'} alt={'monster'}/>
        </div>
      </div>
    );
  }
  