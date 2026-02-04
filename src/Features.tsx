import FeaturesData from "./data/features";
import Feature from "./Feature";

function Features() {

  return (
    <div id = "Feat" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {FeaturesData.map((item, index) => {
        return (
          <Feature
            key={index}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Features;
