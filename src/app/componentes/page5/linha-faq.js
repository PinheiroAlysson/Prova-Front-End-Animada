import Image from "next/image";
import linha from '../../assets/svgs/Line 3.svg'

export default function LinhaFAQ(){
    return(
        <div className="p-3">
            <Image src={linha} width={10}></Image>
        </div>    
    )
}