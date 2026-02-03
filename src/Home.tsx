// Home.tsx
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Join from "./Join.tsx";
import Membership from "./Membership.tsx";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Home() {
  useGSAP(() => {
    gsap.to("#herosec", {
      opacity: 0,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true
      },
    });

    const imgtl = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-it-works",
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.fromTo(
      "#connecting-line",
      { scaleX: 0.65 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#connecting-line",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    imgtl.to(
      ["#imgscroll2","#detailsscroll2","#number2"],
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
      },
      0,
    );

    imgtl.to(["#imgscroll3","#detailsscroll3","#number3"], {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
    });

  }, []);

  return (
    <>
      <main className="bg-red-500 min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] rounded-lg flex flex-col items-center justify-center m-[1%] p-6 overflow-y-auto sm:overflow-hidden">
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
              100+ lab tests. Every year. Detect early signs of 1,000+
              conditions. All for only $17/month
            </p>
          </div>

          <Join />

          <img
            src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
            className="mt-6 w-24 md:w-32"
            alt="HSA FSA"
          />
        </div>
      </main>

      <div id="how-it-works" className="py-24">
        <p className="text-3xl ml-[10%]">How It Works</p>

        <section className="relative px-[5%] pt-[10%] mt-[13%]">
          <div
            id="connecting-line"
            className="absolute w-full top-[58%] h-[2px] bg-orange-400 origin-left scale-x-0"
          ></div>

          <div className="grid grid-cols-3 gap-6 relative z-10">
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
                className="w-full rounded-2xl -translate-y-10 opacity-0 blur-sm"
              />

              <div id = "number2" className="bg-orange-500 w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-sm scale-0 opacity-0 blur-sm">
                2
              </div>

              <div id = "detailsscroll2" className="translate-y-10 opacity-0 blur-sm">
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
                className=" w-full rounded-2xl -translate-y-10 opacity-0 blur-sm"
              />

              <div id = "number3" className="bg-orange-500 w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-sm scale-0 opacity-0 blur-sm">
                3
              </div>

              <div id = "detailsscroll3" className="translate-y-10 opacity-0 blur-sm">
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

      <Membership></Membership>

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