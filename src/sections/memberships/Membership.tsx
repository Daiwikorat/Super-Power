import Features from "./Features";
import Join from "../../components/JoinButton";
export default function Membership() {
  return (
    <>
      <section
        id="membership"
        className="relative items-start mt-40 w-full pt-20 flex flex-col md:flex-row gap-10 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-40 max-w-7xl mx-auto"
      >
        <div
          id="mem"
          className="md:sticky md:top-24 flex flex-col gap-4 md:w-[40%] items-start pb-12">
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

          <Join />
        </div>

        <div className="md:w-[60%]">
          <Features></Features>
        </div>
      </section>
    </>
  );
}
