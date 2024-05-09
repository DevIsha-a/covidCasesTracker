import './App.css';
import { MenuItem, Select, FormControl, Card, CardContent, } from "@material-ui/core"
import { useState, useEffect } from 'react';
import InfoBox from './components/InfoBox';
import Chart from './components/chart';
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("WorldWide");
  const [countryInfo, setcountryInfo] = useState({})


  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);

        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);


    const url = countryCode === "WorlWide" ? `https://disease.sh/v3/covid-19/all` : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then(data => { setcountryInfo(data) })



  };






  return (
    <div className="App">
      

        <div className='app_header'>
          <h1>covid-19 tracker</h1>

        </div>
        <div className='app_stats'>

          <InfoBox className='infected' totalCases={countryInfo.cases}
            totalRecovered={countryInfo.recovered}
            totalDeaths={countryInfo.deaths}
            updated={countryInfo.updated}
          ></InfoBox>

        </div>


      <div className='country_selection'>
      <FormControl id='form'>
        <Select value={country} onChange={onCountryChange}>
          <MenuItem value='WorlWide'>WorldWide</MenuItem>
          {countries.map(country => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}


        </Select>
      </FormControl>
        
      </div>
      

      <div>
        <Chart country={country}> </Chart>
      </div>

    </div>



  );
}



// APi link: https://disease.sh/v3/covid-19/countries
export default App;
