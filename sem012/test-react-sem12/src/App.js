import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components

import Navbar from './Components/Navbar';
import Cards from './Components/Cards';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Navbar />
          <Route path='/Cards'>
            <Cards />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;