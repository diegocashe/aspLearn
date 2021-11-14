import Navigation from './components/common/navigation/nav'
import Home from './components/layout/home/Home'
import Footer from './components/common/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from './components/layout/quiz/quiz';
import AboutUs from './components/layout/about/AboutUs';

function App() {
  return (
    <div className="App bg-gray-100">
      <Router>
        <header className="bg-gray-50">
          <Navigation />
        </header>
        <div className="app-container">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/quiz" component={Quiz} />s
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
