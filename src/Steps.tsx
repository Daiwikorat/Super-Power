import Step from "./Step.tsx";
import Data from "./data/data.ts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Steps() {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        const imgtl = gsap.timeline({
          scrollTrigger: {
            trigger: "#Images",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            pin: true,
            pinSpacing:false,
            markers: true,
          },
        });

        imgtl.fromTo(
          "#img0",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0, duration: 1 },
        );

        imgtl.fromTo(
          "#img1",
          { scale: 1, opacity: 0, y: 400 },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.6",
        );

        imgtl.fromTo(
          "#img1",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0, duration: 1 },
        );

        imgtl.fromTo(
          "#img2",
          { scale: 1, opacity: 0, y: 400 },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.6",
        );

        imgtl.fromTo(
          "#img2",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0.3, duration: 1 },
        );
      },
    });
  }, []);

  
  return (
    <>
      <div id = "Images" className="relative lg:pt-10 lg:h-[500vh] h-auto w-full flex flex-col justify-start items-start">
        {Data.map((item, index) => (
          <Step
            id={`img${index}`}
            key={index}
            url={item.url}
            title={item.title}
            description={item.description}
            points={item.points}
            day={item.day}
          />
        ))}
      </div>
    </>
  );
}
