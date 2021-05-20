import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Card />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
