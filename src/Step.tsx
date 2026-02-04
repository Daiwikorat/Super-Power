interface props {
  id: string;
  url: string;
  title: string;
  description: string;
  points: {
    point1: string;
    point2: string;
    point3: string;
  };
  day: string;
}

export default function Step(props: props) {
  return (
    <div
      id={props.id}
      className="lg:absolute relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 px-6 lg:px-24 xl:px-24"
    >
      <img
        src={props.url}
        alt="Image URL no response OR URL Wrong"
        className="w-full lg:w-[420px] flex-none rounded-2xl object-contain"
      />

      <div className="bg-orange-600 justify-center items-center flex w-20 text-sm md:text-base lg:text-lg text-center lg:text-left mt-0 lg:mt-0 text-white">
        {props.day}
      </div>

      <div className="flex-1 min-w-0 mt-0 lg:mt-0">
        <div className="text-xl md:text-2xl lg:text-3xl">
          <h3 className="sm:text-4xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            {props.title}
          </h3>

          <div className="mt-2 text-xs sm:text-lg md:text-sm lg:text-base break-words">
            {props.description}
          </div>

          <ul className="mt-3 sm:text-lg list-disc pl-5 text-xs md:text-sm lg:text-base">
            <li>{props.points.point1}</li>
            <li>{props.points.point2}</li>
            <li>{props.points.point3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
