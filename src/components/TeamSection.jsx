import TeamImg from "../assets/team_roster.jpg";

const TeamSection = () => {
  return (
    <section className="container p-4 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">ROCK GOLD WALKER</h1>
      <img
        src={TeamImg}
        alt="16U Banister Team"
        className="h-auto mx-auto mb-8"
      />
      <div>
        <h2 className="text-2xl font-semibold">ROCK GOLD WALKER 14U COACHES</h2>
        <hr className="my-2 border-t-2 border-gold" />
        <p>Head Coach: Chan Walker</p>
        <p>Assistant Coach: Ashlyn Katz</p>
        <p>
          <a
            href="mailto:rockgoldwalker@gmail.com"
            className="underline text-gold hover:text-yellow-600"
          >
            rockgoldwalker@gmail.com
          </a>
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">ROCK GOLD 14U WALKER ROSTER</h2>
        <hr className="my-2 border-t-2 border-gold" />
        {/* Add roster details here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">
          ROCK GOLD 14U WALKER TEAM LINKS
        </h2>
        <hr className="my-2 border-t-2 border-gold" />
        {/* Add team links here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">TEAM NEWS</h2>
        <hr className="my-2 border-t-2 border-gold" />
        {/* Add team news here */}
      </div>
    </section>
  );
};

export default TeamSection;
