import AllProducts from "./_components/AllProduct";
import Banner from "./_components/Banner";
import Choose from "./_components/Choose";
import Discover from "./_components/Discover";
import Footer from "./_components/Footer";
import Product from "./_components/Product";
import ProductExperience from "./_components/ProductExperience";
import Header from "./_components/Header";

export default function AxiomPage() {
  return (
    <>
      <Banner />
      <main className="flex axiom-root min-h-screen flex-col w-full bg-white overflow-x-hidden">
        <Header />

        <Product />
        <ProductExperience />
        <AllProducts />
        <Discover />
        <Choose />
        <Footer />
        {/* more sections added here as we build them */}
      </main>
    </>
  );
}