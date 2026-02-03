import Step from "./Step.tsx";
import Data from "./data/data.ts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Steps() {
//   useGSAP(() => {
//     const imgtl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#Images",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         pin: true,
//         markers: true,
//       },
//     });

//     imgtl.fromTo(
//       "#img0",
//       { scale: 1, opacity: 1, },
//       { scale: 0.3, opacity: 0, duration: 1 },
//     );

//     imgtl.fromTo(
//       "#img1",
//       { scale: 0, opacity: 0, y:100 },
//       { scale: 1, opacity: 1, y: 0, duration: 1 },
//     );
//     imgtl.fromTo(
//       "#img1",
//       { scale: 1, opacity: 1},
//       { scale: 0.3, opacity: 0, duration: 1 },
//     );

//     imgtl.fromTo(
//       "#img2",
//       { scale: 0, opacity: 0, y: 100 },
//       { scale: 1, opacity: 1, y: 0, duration: 1 },
//     );
//     imgtl.fromTo(
//       "#img2",
//       { scale: 1, opacity: 1 },
//       { scale: 0.3, opacity: 0, duration: 1 },
//     );
// });

  return (
    <>
      <div id="Images" className="relative h-[500vh] flex justify-center">
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
