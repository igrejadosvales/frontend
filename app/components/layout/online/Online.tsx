import Image from "next/image"

export default function Online() {
    return (
        <section className="flex gap-9 h-online items-center pl-5 max-w-screen-2xl m-auto mr-0 mb-6">
            <div className="flex flex-col w-[50rem] gap-5">
                <h2 className="text-3xl text-black font-semibold">Não consegue vir presencialmente? <br/>
                    Assista a nossa iVales Online!</h2>
                <a href="https://www.youtube.com/@ivalesonline" target="_blank"><button className="px-4 py-3 bg-colorBlue text-background rounded-lg">assista ao culto online</button></a>
            </div>
            <div className="relative w-full h-full">
                <Image src="/global/Online.webp" alt="Celebrações Online" layout="fill" objectFit="cover" objectPosition="left"/>
            </div>
        </section>
    )
}