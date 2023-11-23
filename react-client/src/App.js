import "./App.css";

import Navbar from "./components/navbar/Navbar";
import NeedAccomodationList from "./components/needAccomodationList/NeedAccomodationList";
import StatBox from "./components/statBox/StatBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <StatBox />
        <NeedAccomodationList />
      </main>
    </div>
  );
}

export default App;
