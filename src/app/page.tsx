import { Hero } from "@/components/section/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Placeholder for other sections */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Próximos Eventos
        </h2>
        <p className="text-center text-muted-foreground">
          Conteúdo da home page continua aqui...
        </p>
      </section>
    </div>
  );
}
