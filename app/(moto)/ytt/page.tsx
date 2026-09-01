import About from "./_components/About";
import Banner from "./_components/Banner";
import Destination from "./_components/Destination";
import Experience from "./_components/Experience";
import Explore from "./_components/Explore";
import Products from "./_components/Products";
import Strength from "./_components/Strength";
import Updates from "./_components/Updates";


export default function YttPage() {
  return (
    <>
      
      <main>
       <Banner/>
       <About/>
       <Experience/>
       <Products/>
       <Explore/>
        <Strength/>
       <Destination/>
       <Updates/>
       
      
      </main>
    </>
  );
}