import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
        <Card.Title>Name : {ChefName}</Card.Title>

        <div className="d-flex justify-content-between">
          <Card.Text>Total Recipes : {NumberOfRecipes}</Card.Text>
          <Card.Text>Experience: {YearsOfExperience}</Card.Text>
        </div>

        <div className="d-flex justify-content-between">
          <p> Like : {Likes}</p>
        
        </div>
        <Link
          to={`/recipes/${ID}`}
          className="btn btn-info rounded-0 text-decoration-none w-100"
        >
          {" "}
          View Recipes
        </Link>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
