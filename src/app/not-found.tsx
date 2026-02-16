import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
            <div className="space-y-6 max-w-md">
                <h1 className="text-9xl font-black text-primary/20">404</h1>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Página não encontrada
                </h2>
                <p className="text-lg text-muted-foreground">
                    Desculpe, não conseguimos encontrar a página que você está procurando.
                    Ela pode ter sido movida ou removida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild defaultChecked>
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Voltar ao Início
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/contato">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Fale Conosco
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
