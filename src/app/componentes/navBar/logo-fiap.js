import Image from "next/image";
import logo from "../../assets/svgs/logo-fiap 1.svg";


export default function LogoFiap() {
    return (
        <a href="#">
            <Image src={logo} alt="Logo Fiap" width={150} height={39} className="p-5"/>
        </a>
    )
}