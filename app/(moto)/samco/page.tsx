import About from "./_components/About";
import Application from "./_components/Application";
import Banner from "./_components/Banner";
import Cat from "./_components/Cat";
import Choose from "./_components/Choose"; // Fixed to default import
import Experience from "./_components/Experience";
import Explore from "./_components/Explore";
import Solutions from "./_components/Solutions";

export default function SamcoPage() {
  return (
    <main className="flex flex-col">
      <Banner />
      <About />
      <Experience />
      <Explore />
      <Choose />
      <Application />
      <Solutions />
      <Cat />
    </main>
  );
}