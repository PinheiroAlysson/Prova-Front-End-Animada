import Image from "next/image";
import agua from "../../assets/imgs/water/water_191.jpg"

export default function ImagemAgua(){
    return(
        <div className="flex justify-center mt-40">
            <Image src={agua}/>
        </div>
    )
}