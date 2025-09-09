import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
  if (!Array.isArray(starships)) return null; //check if its an array function, if starships not an array, app doesnt carsh

  return (
    <>
      <div>
        {starships.map(
          (
            ship,
            index // ship = each element in starship, index = position in array
          ) => (
            <StarshipCard
              key={index}
              name={ship.name}
              starship_class={ship.starship_class}
              manufacturer={ship.manufacturer}
              model={ship.model}
            />
          )
        )}
      </div>
    </>
  );
};

export default StarshipList;
