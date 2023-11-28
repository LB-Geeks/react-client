import "./App.css";

import ConfirmedAccomodationList from "./components/confirmedAccomodationList/ConfirmedAccomodationList";
import Navbar from "./components/navbar/Navbar";
import NeedAccomodationList from "./components/needAccomodationList/NeedAccomodationList";
import StatBox from "./components/statBox/StatBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <StatBox />
        <div class="container d-flex mt-4">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="d-flex btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div class="container text-center">
          <div class="row">
            <NeedAccomodationList />
            <ConfirmedAccomodationList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
