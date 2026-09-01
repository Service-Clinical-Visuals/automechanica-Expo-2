import Banner from "./_components/Banner";
import About from "./_components/About";
import Product360 from "./_components/Product360";
import OurProducts from "./_components/Products";
import CompleteSolutions from "./_components/Services";
import Air from "./_components/Air";

export default function MktHomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <Banner/>
      <About/>
      <Product360/>
      <OurProducts/>
      <Air/>
      <CompleteSolutions/>
    </div>
  );
}