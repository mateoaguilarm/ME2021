import './Styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Card from './components/Card';
import Counter from './components/Counter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Counter />
        <Card />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
