import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components

import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import PricingPart from './Components/PricingPart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Navbar />
          <Cards />
          
          <Route path='/Cards'>
            
          </Route>
          <PricingPart />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;