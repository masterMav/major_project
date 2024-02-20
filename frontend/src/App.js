import Footer from "./components/Footer";
import Search from "./components/Search";
import FirstHome from "./components/FirstHome";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import FirstFooter from "./components/FirstFooter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="newApp">
              <FirstHome />
              <About />
              <Work />
              <Contact />
              <FirstFooter />
            </div>
          </Route>

          <Route exact path="/search">
            <Search />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
