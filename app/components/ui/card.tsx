export default function Card({title, description}: {title: string, description: string}) {
    return (
        <div className="border border-transparent rounded-2xl w-80 h-52 p-5 hover:border-colorBlue duration-300 group cursor-default">
            <h3 className="mb-2 font-bold group-hover:text-colorBlue duration-300">{title}</h3>
            <p className="text-sm font-medium">{description}</p>
        </div>
    )
}