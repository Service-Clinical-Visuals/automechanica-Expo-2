import Banner from "./_components/Banner";
import About from "./_components/About"
import Product360 from "./_components/Product360"
import OurProducts from "./_components/Products";
import CompleteSolutions from "./_components/Services";
import Air from "./_components/Air";

export default function MktHomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden">
      <Banner/>
      <About/>
      <Product360/>
      <OurProducts/>
      <Air/>
      <CompleteSolutions/>
    </main>
  );
}