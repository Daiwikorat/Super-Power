interface Props {
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

export default function Step(props: Props) {
  return (
    <div
      id={props.id}
      className="
        relative 
        lg:absolute 
        w-full 
        max-w-[1600px] 
        left-1/2 
        -translate-x-1/2
        flex flex-col lg:flex-row 
        items-start lg:items-center 
        gap-4 lg:gap-8
        px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[15%]
      "
    >
      <img
        src={props.url}
        alt="Image URL no response OR URL Wrong"
        className="w-full lg:w-[420px] flex-none rounded-2xl object-contain"
      />

      <div className="bg-orange-600 flex justify-center items-center w-20 text-base md:text-xl lg:text-lg text-center lg:text-left text-white">
        {props.day}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold leading-tight">
          {props.title}
        </h3>

        <div className="mt-2 text-lg md:text-xl lg:text-base break-words">
          {props.description}
        </div>

        <ul className="mt-3 text-lg md:text-xl lg:text-base list-disc pl-5">
          <li>{props.points.point1}</li>
          <li>{props.points.point2}</li>
          <li>{props.points.point3}</li>
        </ul>
      </div>
    </div>
  );
}
