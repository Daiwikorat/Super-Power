interface Props {
  id: string;
  num: number; // This receives 1, 2, 3...
  url: string;
  title: string;
  description: string;
}

function Plan(props: Props) {
  const animeImg =
    props.num === 1
      ? ""
      : "min-[975px]:-translate-y-10 min-[975px]:opacity-0 min-[975px]:blur-sm";

  const animeNum =
    props.num === 1 ? "" : "min-[975px]:opacity-0 min-[975px]:blur-sm";

  const animeDetails =
    props.num === 1
      ? ""
      : "min-[975px]:translate-y-10 min-[975px]:opacity-0 min-[975px]:blur-sm";

  return (
    <div id={props.id} className="flex flex-col gap-4">
      <img
        id={`img${props.num}`}
        src={props.url}
        alt={props.title}
        className={`w-full rounded-2xl opactiy-1 translate-y-0 ${animeImg}`}
      />

      <div
        id={`number${props.num}`}
        className={`bg-orange-500 w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-sm ${animeNum}`}
      >
        {props.num}
      </div>

      <div
        id={`details${props.num}`}
        className={`opactiy-1 translate-y-0 ${animeDetails}`}
      >
        <p className="font-semibold text-2xl mb-2">{props.title}</p>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

export default Plan;
