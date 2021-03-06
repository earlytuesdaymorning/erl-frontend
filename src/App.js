import './App.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from "react-router-dom";

//import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "http://localhost:4000"
  //"https://erlv1.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects URL={URL} />
      </Route>
      <Route path="/about">
        <About URL={URL} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
