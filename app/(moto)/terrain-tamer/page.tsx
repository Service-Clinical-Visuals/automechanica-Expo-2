import About from "./_components/About";
import Banner from "./_components/Banner";
import Choose from "./_components/Choose";
import Discover from "./_components/Discover";
import Experience from "./_components/Experience";
import Explore from "./_components/Explore";
import News from "./_components/News";
import Products from "./_components/Products";
import "./globals.css";


export default function TerrainTamerPage() {
  return (
    <>
      
      <main>
        <Banner/>
        <About/>
        <Experience/>
        <Products/>
        <Discover/>
        <Choose/>
        <Explore/>
        <News/>
      </main>
    </>
  );
}