import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeCard({ chef }) {
  const {
    Likes,
    NumberOfRecipes,
    YearsOfExperience,
    ChefName,
    ChefPicture,
    ID,
  } = chef;
  return (
    <Card>
      <Card.Img
        className="card-img cardimg img-fluid img-thumbnail mx-auto"
        src={ChefPicture}
      />
      <Card.Body>
        <Card.Title>{ChefName}</Card.Title>

        <div className="d-flex justify-content-between">
          <Card.Text>Total Recipes : {NumberOfRecipes}</Card.Text>
          <Card.Text>Experience: {YearsOfExperience}</Card.Text>
        </div>

        <div className="d-flex justify-content-between">
          <p> Like : {Likes}</p>
          <p> Rating : 4.5</p>
        </div>
        <Button variant="primary" className="w-100">
          View Recipes
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
