import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About the page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              The page was made following a React Udemy Course. The 404 page, the image for the search results without image, the handler when no results and making the search button work was done as an task. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
