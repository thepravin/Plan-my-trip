import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">🏖️ Plan My Trip </h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>; // cloning
        })}
      </div>
    </div>
  );
}

export default Tours;
