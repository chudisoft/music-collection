import { useRouteError } from 'react-router-dom';
import './error-page.css';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="d-flex justify-content-center text-success fa-4x text-center m-4 p-4 card">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
