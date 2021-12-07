import './App.css'
import Hero from './Hero';
import Header from './Header';
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          
          <Route path="/about">
        <About/>
          </Route>
          <Route path="/projects">
        <Projects/>
          </Route>
          <Route path="/">
          <Hero />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
