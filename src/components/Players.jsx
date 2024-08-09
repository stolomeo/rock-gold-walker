const Players = () => {
  const players = [
    { name: "Player 1", position: "Pitcher", img: "path-to-image" },
    { name: "Player 2", position: "Catcher", img: "path-to-image" },
    // more players...
  ];

  return (
    <section id="players" className="py-8 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player) => (
          <div key={player.name} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              src={player.img}
              alt={player.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">{player.name}</h3>
            <p className="mt-2 text-gray-600">{player.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Players;
