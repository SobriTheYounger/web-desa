import Aparatur from "../components/lembaga/Aparatur";
import Bumdes from "../components/lembaga/Bumdes";

const Lembaga = () => {
  return (
    <section className="min-h-dvh bg-(--green) px-20">
      <div className="translate-y-50 p-30 bg-black/15 backdrop-blur-xl rounded-4xl animate-fade-up">
        <Aparatur/>
        <Bumdes/>
      </div>
    </section>
  );
};

export default Lembaga;
