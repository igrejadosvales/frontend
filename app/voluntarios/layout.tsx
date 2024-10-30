export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="bg-background p-4">   
        {children}
      </main>
    )
  }