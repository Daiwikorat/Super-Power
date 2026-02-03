import Steps from "./Steps.tsx";

export default function How() {
  return (
    <div className="min-h-screen">
      <div className="w-full mt-[60px] mb-[40px]">
        <p className="text-center font-semibold text-2xl lg:text-5xl md:text-4xl sm:text-3xl">
          Get clarity at every step
        </p>
      </div>

      <section className="bg-red-200 relative items-center">
        <Steps />
      </section>
    </div>
  );
}