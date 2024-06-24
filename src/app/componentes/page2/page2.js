import ImagemInto from "./imagem";
import Linha from "./linha-header";

export default function Page2() {
    return (
        <div className="mt-[53rem] justify-center">
            <h1 className="relative text-white text-[410%] font-bold font-fonte-principal whitespace-nowrap left-[11.5%]">CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h1>

            <Linha></Linha>

            <h1 className="relative text-white text-[410%] font-bold font-fonte-principal whitespace-nowrap left-[7.5%]">TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</h1>

            <Linha></Linha>

            <ImagemInto></ImagemInto>
            
        </div>
    );
}