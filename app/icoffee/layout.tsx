import Header from "./components/Header/Header"


export default function ICoffeeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="bg-background p-4">
        <Header />
   
        {children}
      </main>
    )
  }