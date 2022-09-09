import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to react" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              done - make an 404 page <hr></hr>
              done - search result doesnt have an image <hr></hr>
              done - there is no handler if there are no search results <hr></hr>
              done - the search button in the navigation doesnt work
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
