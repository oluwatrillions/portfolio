import './App.css'
import Hero from './Hero';
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact'
import Blog from './Blog'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/blog">
            <Blog/>
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
