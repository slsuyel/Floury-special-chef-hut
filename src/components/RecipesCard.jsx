import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function RecipesCard({ Recipes }) {
  console.log(Recipes);
  return (
    <CardGroup>
      {Recipes.map((Recipe) => (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Recipe : {Recipe.RecipeName}</Card.Title>
            <Card.Text>
              Ingredients :{" "}
              {Recipe.Ingredients.slice(0, 3).map((i) => (
                <>
                  <li>{i}</li>
                </>
              ))}
            </Card.Text>
            <Card.Text>
              {" "}
              <span className="fw-bold">Cooking Method :</span> <br />
              {Recipe.CookingMethod.slice(0, 200)} ...
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer d-flex justify-content-around">
            <small className="text-muted">Rating : {Recipe.Rating} ★ </small>
            <button>
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
