interface Props {
  id: string;
  num: number; // This receives 1, 2, 3...
  url: string;
  title: string;
  description: string;
}

function Plan(props: Props) {
  return (
    <>
      <div id={props.id} className="flex items-start gap-4">
        {/* Number (square) */}
        <div
          id={`number${props.num}`}
          className="
            bg-orange-500 flex items-center justify-center
            w-[10vw] min-w-8 aspect-square
            text-white font-bold text-base"
        >
          {props.num}
        </div>

        {/* Right content */}
        <div className="flex flex-col items-start gap-4">
          <img
            id={`img${props.num}`}
            src={props.url}
            alt={props.title}
            className="w-full rounded-2xl"
          />

          <div id={`details${props.num}`}>
            <p className="font-semibold text-2xl mb-2">{props.title}</p>
            <p className="text-sm text-gray-600">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
