export default function Page1() {
    return (
        <div className="mt-52 justify-center">
            <div className=" z-10 text-center mt-20">
                <h1 className="absolute text-[5.2rem] text-white top-[56%] left-[23%] whitespace-nowrap font-bold font-fonte-principal z-2">A Melhor Faculdade</h1>
                <h1 className="absolute text-[5.2rem] text-white top-[67%] right-[43%] whitespace-nowrap font-bold font-fonte-principal z-2">de Tecnologia</h1>
            </div>

            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/30 font-bold text-[18rem] text-gray-500 opacity-10 whitespace-nowrap font-fonte-sobre z-1"
            >
                SOBRE
            </div>
        </div>
    );
}