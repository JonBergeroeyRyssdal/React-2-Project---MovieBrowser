import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser made with React" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Search for movies in the navbar. The page is API driven. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
