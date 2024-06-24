import Image from "next/image";
import linha from '../../assets/svgs/Line 3.svg'

export default function Linha(){
    return(
        <div className="p-2">
            <Image src={linha} className="ml-[-6%]"></Image>
        </div>    
    )
}