const StarshipCard = ({ name, starship_class, manufacturer, model }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>Class: {starship_class}</h2>
      <h2>Manufacturer: {manufacturer}</h2>
      <h2>Model: {model}</h2>
    </div>
  );
};

export default StarshipCard;
