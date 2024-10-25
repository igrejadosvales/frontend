import Header from "./components/layout/header/Header";
import HowWeMove from "./components/layout/how-we-move/HowWeMove";
import Online from "./components/layout/online/Online";
import Geracoes from "./components/layout/geracoes/geracoes";
import Music from "./components/layout/music/music";
import Footer from "./components/layout/footer/Footer";

export default function Home() {
  return ( 
    <main className="h-screen">
      <Header />
      <HowWeMove />
      <Online />
      <Geracoes />
      <Music />
      <Footer />
    </main>
  );
}
