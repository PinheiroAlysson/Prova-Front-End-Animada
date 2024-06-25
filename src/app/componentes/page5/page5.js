export default function FAQ(){
    return(
        <div className="p-2 relative ml-[25%]">
                <h1 className="text-white font-fonte-principal font-bold text-[71px]">FAQ</h1>
                <h2 className="relative cor-texto-magenta font-fonte-principal mt-[-19px] left-[5.4px] text-[18.7px]">Dúvidas Frequentes</h2>

                <div className="relative mr-56 p-2">
                    <ul className="mt-24 flex flex-wrap cor-texto-cursos font-fonte-texto-cursos">
                        <li className="mr-24 mb-4 w-80 whitespace-nowrap">QUANDO POSSO ME MATRICULAR?</li>
                        <li className="mr-24 mb-4 w-[30%]">POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?</li>
                        <li className="mr-24 mb-4 w-[5%] whitespace-nowrap">QUAIS OS PRÉ-REQUISITOS?</li>
                            <div className="p-32 flex ml-[-10%] mt-[-2%]">
                                <li className="mr-[12%] mb-4 w-[28%] whitespace-nowrap">QUAL A DURAÇÃO DOS CURSOS?</li>
                                <li className="mr-[12%] mb-4 w-[40rem]">PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?</li>
                                <li className="">VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?</li>
                            </div>
                    </ul>

                </div>
        </div>
    )
}