import Banner from "./_components/Banner";
import Choose from "./_components/Choose";
import Excellence from "./_components/Excellence";
import Gallery from "./_components/Gallery";
import Premium from "./_components/Premium";
import Product360 from "./_components/Product360";
import Products from "./_components/Products";
import Trade from "./_components/Trade";

export default function MogesanPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black overflow-x-hidden">
      <Banner />
      <Excellence />
      <Product360 />
      <Products/>
      <Premium/>
      <Gallery/>
      <Choose/>
      <Trade/>
      
    </main>
  );
}