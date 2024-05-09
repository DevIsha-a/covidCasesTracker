import React, { useState, useEffect } from "react";
import './chart.css'
import { Line, Bar,  } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Chart = ({ country }) => {


    console.log(country)
    const [countryInfo, setcountryInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = country === "WorlWide" ? `https://disease.sh/v3/covid-19/all` : `https://disease.sh/v3/covid-19/countries/${country}`;
            await fetch(url)
                .then((response) => response.json())
                .then(data => { setcountryInfo(data) })
                .then((data) => console.log(data))


        }

      console.log(`total cases in ${countryInfo.country}:` + countryInfo.cases)
        console.log(`total deaths in ${country}: ` + countryInfo.deaths)
       console.log(`total recoverd in ${country}:`  + countryInfo.recovered)
        fetchData();
    },[])


 const   data={
        labels: ['Infected', 'Deaths', 'Recovered'],
        datasets: [
            {
                label: 'people',
                backgroundColor:['blue', 'green', 'red'],
                data: [countryInfo.cases, countryInfo.recovered, countryInfo.deaths],
            }
            
        ],
        
    }






    return <div>

       
<Bar  data={data}  id='chart'/>
            
    </div>
}
 export default Chart;





