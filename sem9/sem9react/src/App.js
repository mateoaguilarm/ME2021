import './App.css';
import Test from './comps/Test';
import Ej1Func from './comps/ej1/Ej1Func';

function App() {
  return (
    <div className="App">
      <Test />
      <Ej1Func anc1='Part One' anc2='Part Two' anc3='Part Three'/>
    </div>
  );
}

export default App;
