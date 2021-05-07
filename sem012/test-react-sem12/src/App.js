import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components

import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Navbar />
          <Route>

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;