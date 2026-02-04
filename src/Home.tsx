// Home.tsx
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Membership from "./Membership.tsx";
import Howsec from "./Howsec.tsx";
import Hero from "./Hero.tsx";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Home() {
  
  return (
    <>
      <main className="bg-red-500 min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] rounded-lg flex flex-col items-center justify-center m-[1%] p-6 overflow-y-auto sm:overflow-hidden">
        <Hero/>
      </main>

      <div id="howsec" className="py-24">
          <Howsec/>
      </div>

      <Membership/>

      <div className="relative flex justify-center my-12">
        <Link
          to="/how"
          className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg"
        >
          How It works
        </Link>
      </div>
    </>
  );
}

export default Home;