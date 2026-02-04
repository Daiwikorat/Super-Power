import Join from "./Join.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Hero() {
  useGSAP(() => {
    gsap.to("#herosec", {
      opacity: 0,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);
  return (
    <>
      <div
        id="herosec"
        className="w-full max-w-[90%] md:max-w-[70%] flex flex-col items-start text-left md:items-center md:text-center"
      >
        <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
          Unlock your new <br className="hidden md:block" />
          health intelligence
        </p>

        <div className="w-full md:w-[70%] lg:w-[60%] mt-6">
          <p className="text-sm sm:text-sm md:text-lg">
            100+ lab tests. Every year. Detect early signs of 1,000+ conditions.
            All for only $17/month
          </p>
        </div>

        <Join />

        <img
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
          className="mt-6 w-24 md:w-32"
          alt="HSA FSA"
        />
      </div>
    </>
  );
}

export default Hero;
