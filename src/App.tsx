import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  // const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to("#herosec", {
        opacity: 0,
        scrollTrigger: {
          trigger: "main",
          start: "top 5%",
          end: "top -100%",
          scrub: 1,
          markers: true,
          pin: true,
        },
      });
    }
  );

  return (
    <>
      <main className="bg-red-500 min-h-screen rounded-lg flex flex-col items-center justify-center">
        <div
          id="herosec"
          className="w-[50%] h-[50%] mt-[10%] flex flex-col items-center"
        >
          <p className="text-xl">
            Unlock your new <br />
            health intelligence
          </p>
          <div className="w-[60%] h-[10%] mt-[3%]">
            <p className="text-sm">
              100+ lab tests. Every year. Detect early signs of 1,000+
              conditions. All for only $17/month
            </p>
          </div>
          <button className="bg-orange-200 w-[25%] py-4 mt-[10%] rounded-xl">
            Join Today
          </button>
          <img
            src={
              "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
            }
            className="mt-[2%]"
            alt="HSA FSA"
          />
        </div>
      </main>

      <section className="h-screen bg-zinc-800 flex items-center justify-center">
        <h2 className="text-white text-2xl">Next Section Content</h2>
      </section>
    </>
  );
}

export default App;