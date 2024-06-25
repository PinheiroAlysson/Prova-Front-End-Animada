import Image from "next/image";
import linha from '../../assets/svgs/Line 3.svg'

export default function LinhaCursos(){
    return(
        <div className="p-3">
            <Image src={linha} className="ml-[-1.9%]"></Image>
        </div>    
    )
}