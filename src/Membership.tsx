import Features from "./Features";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Membership() {


  return (
    <>
      <section
        id="membership"
        className="relative items-start bg-red-100 w-full pt-20 flex flex-col lg:flex-row gap-10 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-40 max-w-7xl mx-auto"
      >
        <div id="mem" className="lg:sticky lg:top-24 flex flex-col gap-4 lg:w-[40%]">
          <p className="font-semibold text-3xl lg:text-2xl max-w-md">
            {" "}
            What's included in your membership{" "}
          </p>
          <p className="text-md max-w-lg">
            {" "}
            Superpower is more than a blood test.{" "}
          </p>
          <p className="text-md max-w-xl">
            {" "}
            Access an ecosystem of diagnostics and doctor-trusted solutions
            personalized to you.{" "}
          </p>
        </div>

        <div className="lg:w-[60%]">
          <Features></Features>
        </div>
      </section>
    </>
  );
}
