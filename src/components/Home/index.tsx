import Navbar from "@/components/Navbar";
import { CountriesContextProvider } from "@/context/CountriesContext";
import Content from "../Content";

const Home = () => {
  return (
    <CountriesContextProvider>
      <section className="flex flex-col relative">
        <Navbar />
        <Content />
      </section>
    </CountriesContextProvider>
  );
}

export default Home;