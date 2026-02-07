interface Props {
  id: string;
  url: string;
  title: string;
  description: string;
}

function Plan(props: Props) {
  return (
    <>
      <div id={props.id} className="bg-red-200">
        Hyy
      </div>
    </>
  );
}

export default Plan;
