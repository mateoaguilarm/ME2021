import React, {useState, useEffect} from 'react'
import './App.css';
import Test from './components/Test';
import PeticionesCard from './components/PeticionesCard';

function App() {
  const [countries, setCountries] = useState([]);

  const showCountry = () => {
    const newContry = countries.map(country => {
      return <PeticionesCard title={country.name} desc={country.population} btn='Más Info' />
    });
  
    return newContry
  };

  useEffect(() => {
    const apiCountries = () => {
      let theAPIURL = 'https://restcountries.eu/rest/v2/all'
      fetch(theAPIURL).then((response) => response.json()).then((data) => setCountries(data)).catch((err) => console.log(err))
    }
    
    apiCountries()
  }, [])

  return (
    <div className="App">
      {/* <Test /> */}
      {showCountry()}
    </div>
  );
}

export default App;
