const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1470406601945-7a6890b947b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Discover an exceptional coocking class tailored for you!
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              deleniti accusamus animi minima voluptate neque! Porro perferendis
              vel eius nobis?
            </p>
            <div className="space-x-5">
              <button className="btn btn-success">Explore Now</button>
              <button className="btn ">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
