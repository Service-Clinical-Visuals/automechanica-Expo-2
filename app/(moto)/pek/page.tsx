import About from "./_components/About";
import Available from "./_components/Available";
import Banner from "./_components/Banner";
import Experience from "./_components/Experience";
import Fit from "./_components/Fit";
import Manufacture from "./_components/Manufacture";
import Performance from "./_components/Performance";
import Products from "./_components/Products";


export default function YttPage() {
  return (
    <>
      <main>
        <Banner/>
        <About/>
        <Experience/>
        <Manufacture/>
        <Performance/>
        <Products/>
        <Available/>
        <Fit/>
      </main>
    </>
  );
}