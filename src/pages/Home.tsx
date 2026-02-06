// Home.tsx
import "../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Membership from "../sections/memberships/Membership.tsx";
import Howsec from "../sections/Howsec.tsx";
import Hero from "../sections/Hero.tsx";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Home() {
  
  return (
    <>
      <Hero/>
      <Howsec/>
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