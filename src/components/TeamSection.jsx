import RosterImg from "../assets/roster.jpg";
import ScheduleImg from "../assets/schedule.jpg";
import TeamImg from "../assets/team-pic.jpg";

const TeamSection = () => {
  return (
    <section className="container p-4 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center md:text-left">
        ROCK GOLD WALKER
      </h1>
      <img
        src={TeamImg}
        alt="Rock Gold Walker 14U Team"
        className="h-auto mx-auto mb-8"
      />
      <div>
        <h2 className="text-2xl font-semibold">COACHES</h2>
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
      <div className="mt-8" id="schedule">
        <h2 className="text-2xl font-semibold">SCHEDULE</h2>
        <hr className="my-2 border-t-2 border-gold" />
        <img src={ScheduleImg} alt="Schedule" className="h-auto mx-auto mb-8" />
        {/* Add roster details here */}
      </div>
      <div className="mt-8" id="roster">
        <h2 className="text-2xl font-semibold">ROSTER</h2>
        <hr className="my-2 border-t-2 border-gold" />
        <img src={RosterImg} alt="Roster" className="h-auto mx-auto mb-8" />
        {/* Add roster details here */}
      </div>
    </section>
  );
};

export default TeamSection;
