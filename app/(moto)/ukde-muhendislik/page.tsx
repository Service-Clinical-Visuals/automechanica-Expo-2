import About from "./_components/About";
import Banner from "./_components/Banner";
import Header from "./_components/Header";
import Engineered from "./_components/Engineered";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import Quality from "./_components/Quality";
import Tested from "./_components/Tested";
import Certificates from "./_components/Certificates";
import Footer from "./_components/Footer";

export default function AvortexHome() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <About />
      <Engineered />
      <Products />
      <Precision />
      <Quality />
      <Tested />
      <Certificates />
      <Footer />
    </main>
  );
}
