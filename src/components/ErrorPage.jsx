import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page  mt-5 text-center">
      <h1>Oops! 404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        className="btn btn-info font-monospace fw-bold text-bg-primary"
        to="/"
      >
        Go to home
      </Link>
    </div>
  );
}

export default ErrorPage;
