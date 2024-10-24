import ButtionGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtionGradient />
    </>
  );
};

export default App;
