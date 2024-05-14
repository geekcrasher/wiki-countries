import Content from "@/components/Content";
import SearchBar from "@/components/Searchbar";

const Home = () => {
  return (
    <section className="flex flex-col relative mt-20 py-16 px-10 md:px-16 lg:px-20 min-h-[calc(100vh-5.5rem)]">
      <SearchBar />
      <Content />
    </section>
  );
}

export default Home;