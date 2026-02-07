import HowitData from "../../data/plannerData.ts";
import Plan from "./Plan.tsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Planner() {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 975px)": () => {
        const imgtl = gsap.timeline({
          scrollTrigger: {
            trigger: "#howsec",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        });

        imgtl.to(["#img2", "#details2", "#number2"], {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        });

        imgtl.to(["#img3", "#details3", "#number3"], {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        });
      },
    });
  });

  return (
    <>
      <div className="mt-10">
        <p className="text-3xl ml-[10%]">How It Works</p>

        <section id="howsec" className="relative px-[5%] pt-[10%]">
          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            <div className="flex flex-col gap-4">
              <img src="/hall.png" className="w-full rounded-2xl" />

              <div className="bg-orange-500 w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-sm">
                1
              </div>

              <div>
                <p className="font-semibold text-2xl mb-2">
                  Test your whole body
                </p>
                <p className="text-sm text-gray-600">
                  Get a comprehensive blood draw at one of our 2,000+ partner
                  labs or from the comfort of your own home.
                </p>
              </div>
            </div>

            {HowitData.map((item, index) => (
              <Plan
                id={`step${index}`}
                num={index + 2}
                url={item.url}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Planner;
