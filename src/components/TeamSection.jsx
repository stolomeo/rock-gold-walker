const TeamSection = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">16U BANISTER</h1>
      <img
        src="https://athletics-mercado.com/wp-content/uploads/2022/09/image0.jpeg"
        alt="16U Banister Team"
        className="w-full h-auto mb-8"
      />
      <div>
        <h2 className="text-2xl font-semibold">16U BANISTER MANAGERS</h2>
        <hr className="border-t-2 border-gold my-2" />
        <p>Athletics Mercado Director: Sam Banister</p>
        <p>Athletics Mercado Manager: Cheri Thiele</p>
        <p>Head Coach: Sam Banister</p>
        <p>Assistant Coach: Jameel Abdullah</p>
        <p>athleticsmercadoflorida@gmail.com</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">16U BANISTER ROSTER</h2>
        <hr className="border-t-2 border-gold my-2" />
        {/* Add roster details here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">16U BANISTER TEAM LINKS</h2>
        <hr className="border-t-2 border-gold my-2" />
        {/* Add team links here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">TEAM NEWS</h2>
        <hr className="border-t-2 border-gold my-2" />
        {/* Add team news here */}
      </div>
    </section>
  );
};

export default TeamSection;
