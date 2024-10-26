export default function Music() {
    return(
        <section className="w-full h-header bg-background-music bg-no-repeat bg-cover text-white relative">
            <div className="absolute w-full h-full bg-gradient-to-t from-gradient to-transparent"></div>
            <div className="max-w-screen-xl m-auto flex flex-col justify-between h-full py-10 relative z-10 px-5">
                <div>
                    <h2 className="text-3xl font-bold">IVALES MUSIC</h2>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-medium">Nova música: Tudo em Todos
                    </h2>
                    <a href="https://www.youtube.com/watch?v=jS232aq79sQ&ab_channel=SULSETMUSIC" target="_blank"><button className="border py-3 px-10 rounded-lg">ouça agora</button></a>
                </div>
            </div>
        </section>
    )
}