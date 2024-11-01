import MenuCard from "../components/MenuCard";

type Drink = {
    id: number
    title: string,
    subtitle: string,
    backgroundColor: string,
    textColor: string,
    price: string
}

export default async function Page({ params }: { params: { menu: string }}) {
    const res = await fetch(`http://localhost:3000/icoffee/api/menu/${params.menu}`);
    const data = await res.json()
    
    return ( 
        <div>
            {
                data.map((drink: Drink) => (
                    <MenuCard 
                        key={drink.id}
                        title={drink.title}
                        subtitle={drink.subtitle}
                        price={drink.price}
                        backgroundColor={drink.backgroundColor}
                        textColor={drink.textColor}
                    />
                ))
            }
        </div>
    );
  }

  