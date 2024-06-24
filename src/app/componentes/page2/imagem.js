import Image from "next/image";
import pessoa from "../../assets/imgs/intro.png"

export default function ImagemInto(){
    return(

        <div className="relative">
            <div className="relative z-10 flex justify-center">
                <ul className="absolute mt-[25%] text-[700%] left-[9.5%] flex space-x-4 list-none whitespace-nowrap">
                    <li className="lista-customizada-item font-fonte-texto-skill text-stroke">SKILLS</li>
                    <li className="lista-customizada-item font-fonte-texto-skill text-stroke">CONHECIMENTO</li>
                    <li className="lista-customizada-item font-fonte-texto-skill text-stroke">SKILLS</li>
                </ul>
                <p className="absolute mt-[30%] text-[700%] left-[2.5%] flex space-x-4 list-none whitespace-nowrap italic font-fonte-texto-skill text-stroke">MUITO. MUITO ALÉM DOS TUTORIAIS</p>
            </div>
            <div className="flex justify-center p-16 ">
                <Image src={pessoa} alt="pessoa pensando" width={1200} height={80}/>
            </div>
        </div>
    )
}