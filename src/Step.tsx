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
    <>
      <div
        id={props.id}
        className="absolute mt-10 flex flex-col [@media(min-width:950px)]:flex-row justify-center items-start md:items-center lg:gap-2 gap-6 lg:gap-10 px-6 md:px-12 md:px-12 md:px-12 md:px-12 md:px-12 lg:px-24 xl:px-40 2xl:px-60"
      >
        <img
          src={props.url}
          className="[@media(max-width:950px)]:w-[100%] lg:min-w-[40%] md:w-[60%] rounded-2xl"
          alt="Image URL no response OR URL Wrong"
        />

        <div className="text-sm md:text-base lg:text-lg">{props.day}</div>

        <div className="mt-2">
          <div className="text-xl md:text-2xl lg:text-3xl">
            <div className="lg:text-3xl text-2xl md: text-xl font-semibold">
              {props.title}
            </div>
            <div className="mt-2 text-xs md:text-sm lg:text-base">
              {props.description}
            </div>
            <ul className="mt-3 list-disc pl-5 text-xs md:text-sm lg:text-base">
              <li>{props.points.point1}</li>
              <li>{props.points.point2}</li>
              <li>{props.points.point3}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
