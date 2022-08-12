import React from 'react';

import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
} from 'react-router-dom';

// Pages
import Index from './pages/index';
import Events from './pages/events';
import Outreach from './pages/outreach';
import Projects from './pages/projects';
import Workshops from './pages/workshops';
import Team from './pages/team';
import Error from './pages/404';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Index />}/>
          <Route exact path="/events" element={<Events />}/>
          <Route exact path="/outreach" element={<Outreach />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/workshops" element={<Workshops />}/>
          <Route exact path="/team" element={<Team />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
    </Router>
  );
}

export default App