
export default function Online() {
    return (
        <section className="h-online w-full bg-background-online bg-no-repeat bg-cover bg-center p-5 sm:p-6 md:p-12 lg:p-20 ">
            <div className="flex items-center justify-center max-w-screen-xl h-full flex-col md:flex-row md:items-start md:justify-start lg:-ml-7">
                <div className="flex flex-col w-full md:w-1/2 gap-4 h-full justify-end text-center md:text-left md:pl-10 md:pb-10">
                    <h2 className="text-2xl xl:text-2xl text-white leading-snug">Não consegue vir presencialmente? <br/>
                        Assista a nossa iVales Online!</h2>
                    <a href="https://www.youtube.com/@ivalesonline" target="_blank"><button className="px-4 py-3 bg-colorBlue text-background rounded-lg">assista ao culto online</button></a>
                </div>
            </div>
        </section>
    )
}