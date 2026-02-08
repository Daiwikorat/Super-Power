import { useState, useEffect } from "react";
import HowitData from "../../data/plannerData.ts";

import Plan from "./Plan.tsx";
import Plansmall from "./Plansmall.tsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Planner() {
  const [isSM, setisSM] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setisSM(window.innerWidth < 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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

        imgtl.to("#horline", {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 3,
          ease: "none",
        });

        imgtl.to(
          ["#img2", "#details2", "#number2"],
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
          },
          0,
        );

        imgtl.to(
          ["#img3", "#details3", "#number3"],
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
          },
          1,
        );
      },
    });
  });

  return (
    <>
      <div className="mt-10">
        <p className="text-3xl ml-[10%]">How It Works</p>

        <section id="howsec" className="relative px-[5%] pt-[10%]">
          {!isSM && (
            <div
              id="horline"
              className="
              absolute 
              left-0 top-[50%] min-[716px]:top-[70%] scale-x-[0.1] origin-left
              w-screen h-[2px]
              bg-[linear-gradient(to_right,#f97316_0%,#f97316_80%,transparent_100%)]
              -z-10
              "
            />
          )}
          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            {isSM && (
              <div
                id="verline"
                className="absolute w-[3px] h-full ml-[2vh] min-[546px]:ml-[4%]  bg-[linear-gradient(to_bottom,#f97316_0%,#f97316_80%,transparent_100%)] -z-10"
              ></div>
            )}

            {HowitData.map((item, index) =>
              isSM ? (
                <Plansmall
                  key={index}
                  id={`step${index}`}
                  num={index + 1}
                  url={item.url}
                  title={item.title}
                  description={item.description}
                />
              ) : (
                <Plan
                  key={index}
                  id={`step${index}`}
                  num={index + 1}
                  url={item.url}
                  title={item.title}
                  description={item.description}
                />
              ),
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Planner;
