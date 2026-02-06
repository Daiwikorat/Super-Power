import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Howsec() {
  useGSAP(() => {

      ScrollTrigger.matchMedia({
        "(min-width: 975px)": () => {
          const imgtl = gsap.timeline({
            scrollTrigger: {
              trigger: "#howsec",
              start: "top top",
              end: "+=200%",
              scrub: 1,
              pin: true,
<<<<<<< HEAD:src/Howsec.tsx
              markers: true,
=======
>>>>>>> c685877 (Feat: Latest Build):src/sections/Howsec.tsx
            },
          });

          gsap.fromTo(
            "#connecting-line",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: "#howsec",
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            },
          );

          imgtl.to(
            ["#imgscroll2", "#detailsscroll2", "#number2"],
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            },
            0,
          );

          imgtl.to(["#imgscroll3", "#detailsscroll3", "#number3"], {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          });
        },
      });
    });
;

  

  return ( 
    <>
      <div id="howsec">
        <p className="text-3xl ml-[10%]">How It Works</p>

        <section className="relative px-[5%] pt-[10%]">
          <div
            id="connecting-line"
            className="fixed left-0 top-1/2 w-full top-[58%] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-orange-400 from-90% to-transparent to-100% z-0"
          ></div>

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

            <div className="flex flex-col gap-4">
              <img
                src="/app.png"
                id="imgscroll2"
                className="w-full rounded-2xl min-[975px]:-translate-y-10 min-[975px]:opacity-0 min-[975px]:blur-sm"
              />

              <div
                id="number2"
                className="bg-orange-500 w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-sm min-[975px]:scale-0 min-[975px]:opacity-0 min-[975px]:blur-sm"
              >
                2
              </div>

              <div
                id="detailsscroll2"
                className="min-[975px]:translate-y-10 min-[975px]:opacity-0 min-[975px]:blur-sm"
              >
                <p className="font-semibold text-2xl mb-2">
                  An actionable plan
                </p>
                <p className="text-sm text-gray-600">
                  Easy to understand results and a clear health plan with
                  tailored recommendations on diet, lifestyle changes &
                  supplements.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img
                src="/jogging.png"
                id="imgscroll3"
                className=" w-full rounded-2xl min-[975px]:-translate-y-10 min-[975px]:opacity-0 min-[975px]:blur-sm"
              />

              <div
                id="number3"
                className="bg-orange-500 w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-sm min-[975px]:scale-0 min-[975px]:opacity-0 min-[975px]:blur-sm"
              >
                3
              </div>

              <div
                id="detailsscroll3"
                className="min-[975px]:translate-y-10 min-[975px]:opacity-0 min-[975px]:blur-sm"
              >
                <p className="font-semibold text-2xl mb-2">
                  A connected ecosystem
                </p>
                <p className="text-sm text-gray-600">
                  You can book additional diagnostics, buy curated supplements
                  with members-only discounts in your Superpower dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Howsec;
