import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Swal from "sweetalert2";

function RecipesCard({ Recipes }) {
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleClick = (index) => {
    Swal.fire("", "The recipe is added to your favorite list!", "success");
    setDisabledButtons([...disabledButtons, index]);
  };

  return (
    <CardGroup>
      {Recipes.map((Recipe, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <Card.Title>Recipe: {Recipe.RecipeName}</Card.Title>
            <Card.Text>
              Ingredients:{" "}
              {Recipe.Ingredients.slice(0, 5).map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Cooking Method:</span> <br />
              {Recipe.CookingMethod.slice(0, 200)} ...
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer d-flex justify-content-around">
            <small className="text-muted">Rating: {Recipe.Rating} ★</small>
            <button
              onClick={() => handleClick(index)}
              disabled={disabledButtons.includes(index)}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/017/178/055/original/love-heart-symbol-on-transparent-background-free-png.png"
                alt=""
                width={"20px"}
              />
            </button>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
}

export default RecipesCard;
