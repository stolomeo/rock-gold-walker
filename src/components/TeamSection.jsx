import CoachesImg from "../assets/IMG_1999.jpg";

const TeamSection = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">ROCK GOLD WALKER</h1>
      <img
        src={CoachesImg}
        alt="16U Banister Team"
        className="w-2/3 h-auto mb-8 mx-auto"
      />
      <div>
        <h2 className="text-2xl font-semibold">ROCK GOLD WALKER 14U COACHES</h2>
        <hr className="border-t-2 border-gold my-2" />
        <p>Head Coach: Chan Walker</p>
        <p>Assistant Coach: Ashlyn Katz</p>
        <p>
          <a
            href="mailto:rockgoldwalker@gmail.com"
            className="text-gold hover:text-yellow-600 underline"
          >
            rockgoldwalker@gmail.com
          </a>
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">ROCK GOLD 14U WALKER ROSTER</h2>
        <hr className="border-t-2 border-gold my-2" />
        {/* Add roster details here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">
          ROCK GOLD 14U WALKER TEAM LINKS
        </h2>
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
