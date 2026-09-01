import About from "./_components/About";
import Hero from "./_components/Banner";
import Certifications from "./_components/Certifications";
import Experience from "./_components/Experience";
import Features from "./_components/Features";
import Products from "./_components/Products";
import Quality from "./_components/Quality";
import VM from "./_components/VM";

export default function AsasPage() {
  return (
    <>
      
      <main>
       <Hero/>
       <About/>
       <Experience/>
       <Products/>
       <Features/>
       <VM/>
       <Quality/>
       <Certifications/>
      </main>
     
    </>
  );
}