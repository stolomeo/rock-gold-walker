const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('path-to-image')` }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">16U Banister</h1>
        <p className="mt-4 text-lg">
          Welcome to the official page of 16U Banister
        </p>
      </div>
    </section>
  );
};

export default Hero;
