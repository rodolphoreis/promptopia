import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubra e Compartilhe
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Prompts Impulsionados por IA</span>
      </h1>
      <p className="desc text-center">
        Promptopia é uma ferramenta de prompts com tecnologia IA de código
        aberto para o mundo moderno descobrir, criar e compartilhar prompts
        criativos.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
