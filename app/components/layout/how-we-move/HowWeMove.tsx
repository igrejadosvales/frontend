import Card from "../../ui/card";

export default function HowWeMove() {
    return ( 
      <section className="text-black flex flex-col items-center justify-center my-16 max-w-screen-xl m-auto px-5">
        <h2 className="text-6xl font-bold">como nos <span className="text-colorBlue">movemos</span></h2>
        <p className="text-sm max-w-xl text-center my-6">Nossa  missão é alcançar o maior número de pessoas para Jesus, cuidar bem delas 
        e capacitá-las para anunciar o evangelho no templo, nas casas e na  cidade.</p>
        <div className="flex mb-6 justify-between w-full">
            <Card 
                title="No Templo" 
                description="Nossas celebrações ocorrem todos os domigos às 10h, 17h e 19h30, e nas quartas-feiras às 20h na Rua Santa Clara, 192.
                Acompanhe as celebrações online, pelo nosso canal do Youtube."
            />

            <Card 
                title="Nas Casas" 
                description="Participe de um iGrupo. No iGrupo você é cuidado, desafiado a descobrir  seus dons e enviado para servir dentro da sua área de influência."
            />

            <Card 
                title="Na Cidade" 
                description="Servimos nossa cidade levando o caráter de Cristo em todas as esferas da sociedade."
            />
        </div>
        <a href="#"><button className="py-3 border border-colorBlue px-24 rounded-lg text-colorBlue font-semibold hover:bg-colorBlue hover:text-background duration-300">venha nos visitar</button></a>
      </section>
    );
  }
  