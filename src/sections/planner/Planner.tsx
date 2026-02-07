import HowitData from "../../data/plannerData.ts";
import Plan from "./Plan.tsx";

function Planner() {
  return (
    <>
      <section className="bg-red-100">
        {HowitData.map((item, index) => (
          <Plan
            id={`step${index}`}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </>
  );
}

export default Planner;
