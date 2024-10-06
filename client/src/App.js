import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home/Home";
import Nav from "./component/Nav/Nav";
import CardItem from "./component/Card/CardItem/CardItem";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
              </>
            }
          />
          <Route path="/home" element={<CardItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
