import Hero from "./Hero";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Hero text="404" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            This page does not exist. Go back to the{' '}
              <Link to="/">homepage.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
