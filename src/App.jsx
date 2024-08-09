import Footer from "./components/Footer";
import Header from "./components/Header";
import TeamSection from "./components/TeamSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
