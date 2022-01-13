import {Footer, Navbar} from "./components";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/HomePage/Home";
import Pricing from "./components/Pricing/Pricing";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
