import About from "./_components/About";
import Banner from "./_components/Banner";
import Driving from "./_components/Driving";
import Family from "./_components/Family";
import Performance from "./_components/Performance";
import Powering from "./_components/Powering";
import Product360 from "./_components/Product360";
import Shop from "./_components/Shop.";
import "./globals.css";

export default function OptibeltPage() {
  return (
    <>
    
      <main>
       <Banner/>
       <About/>
       <Product360/>
       <Performance/>
       <Powering/>
       <Driving/>
       <Shop/>
       <Family/>
      </main>
    
    </>
  );
}