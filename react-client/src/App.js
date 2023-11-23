import "./App.css";

import Navbar from "./components/navbar/Navbar";
import StatBox from "./components/statBox/StatBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <StatBox />
      </main>
    </div>
  );
}

export default App;
