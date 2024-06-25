import LinhaCursos from "./linha-cursos";

export default function Cursos(){
    return(
        <div className="p-52 relative right-[18.5%] m-0 ml-[16%]">
            <h1 className="text-white font-fonte-principal font-bold text-[71px]">Cursos</h1>
            <h2 className="relative cor-texto-magenta font-fonte-principal mt-[-19px] left-[5.4px] text-[18.7px]">Cursos de Curta Duração</h2>
            <div className="relative ml-[77%] mt-[-8%] text-[13.7px]">
             <a href="#">
                <ul className="flex text-white font-fonte-texto-cursos">
                    <li className="mr-24">TECNOLOGIA</li>
                    <li className="mr-24">INOVAÇÃO</li>
                    <li>NEGÓCIOS</li>
                </ul>
            </a>    
            </div>

            <div className="p-72 relative text-white text-[2.7rem] right-[33.3%] mt-[-20%]">
                <h1 className="font-fonte-principal font-bold">Tecnologia</h1>
            </div>

            <div className="relative mt-[-25%] cor-texto-cursos pr-10">
                <ul className="mr-[15%]">
                    <li className="fonte-lista-tecnologia flex text-[18px]">Big Data Ecosystem<p className="font-fonte-principal ml-8 text-[11px] mt-2">REMOTO • LIVE</p></li>
                    <LinhaCursos></LinhaCursos>
                    <li className="fonte-lista-tecnologia flex text-[18px]">Creating Dashboards for BI<p className="font-fonte-principal ml-8 text-[11px] mt-2">REMOTO • LIVE</p></li>
                    <LinhaCursos></LinhaCursos>
                    <li className="fonte-lista-tecnologia flex text-[18px]">Big Data Science - Machine Learning & Data Mining<p className="font-fonte-principal ml-8 text-[11px] mt-2">REMOTO • LIVE + MULTIMÍDIA</p></li>
                    <LinhaCursos></LinhaCursos>
                    <li className="font-fonte-nome-cursos flex text-[18px]">Storytelling<p className="font-fonte-principal ml-8 text-[11px] mt-2">REMOTO • LIVE</p></li>
                    <LinhaCursos></LinhaCursos>
                </ul>
            </div>
        </div>
        
    )
}