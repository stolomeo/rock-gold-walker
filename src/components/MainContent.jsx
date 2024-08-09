const MainContent = () => {
  return (
    <div className="container mx-auto py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700">
          Welcome to Rock Gold Walker website
        </h2>
        <p className="mt-4 text-gray-600">
          We are proud to introduce our team and look forward to a successful
          season. Here you can find information about our schedule, roster, and
          more.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700">Latest News</h2>
        <p className="mt-4 text-gray-600">
          Stay tuned for the latest updates and announcements regarding the
          team.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700">
          Upcoming Events
        </h2>
        <p className="mt-4 text-gray-600">
          Check out our upcoming events and make sure to mark your calendar.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
