import React from 'react';
import '../src/components/App.css';
import Navbar from './components/navbar'
import landingPage from './components/pages/landingPage';
import learnable from './components/pages/learnable';
import learnableDeveloper from './components/pages/learnableDeveloper'
import learnableDesigner from './components/pages/learnableDesigner'
import applyYourKnowledge from './components/pages/applyYourKnowledge'
import journal from './components/pages/journal'
import FAQ from './components/pages/FAQ'
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';

// import Rooms from './pages/rooms';
// import Error from './pages/error';
// import SingleRoom from './pages/singleRoom';
// import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={landingPage} exact />
        <Route path="/learnable" component={learnable} exact />
        <Route path="/the-learnable-software-developer" component={learnableDeveloper} exact />
        <Route path="/the-learnable-software-designer" component={learnableDesigner} exact />
        <Route path="/apply-your-knowledge" component={applyYourKnowledge}  exact />
        <Route path="/journal" component={journal} exact />
        <Route path="/FAQ" component={FAQ} exact />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
