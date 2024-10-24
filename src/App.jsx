import ButtionGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
const App = () => {
  return (
    <>
      <div className="text-3xl underline font-bold">Brainwave App</div>
      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        <Button className="mt-10">Something</Button>
      </div>
      <ButtionGradient />
    </>
  );
};

export default App;
