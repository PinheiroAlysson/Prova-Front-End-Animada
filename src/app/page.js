import NavBar from "./componentes/navBar/navBar";
import Page1 from "./componentes/page1/page1";
import Page2 from "./componentes/page2/page2";
import Page3 from "./componentes/page3/page3"
import Page4 from "./componentes/page4/page4"
import Page5 from "./componentes/page5/page5"

  export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#000000]">
     <NavBar/>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
     <Page5/>
    </main>
  );
}
