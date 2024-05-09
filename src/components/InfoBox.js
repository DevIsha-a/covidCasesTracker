import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import './Infobox.css'
import CountUp from 'react-countup'

function InfoBox({ totalCases, totalRecovered, totalDeaths, updated }) {


  return (
    <div className='card_container'>
      <Card className='Total_cases'>
        <CardContent>
          <Typography > Total Cases</Typography>
          <h2 >
          <CountUp
          start={0}
          end={totalCases}
          duration={2}
          separator=','></CountUp></h2>
          <Typography>Last Updated: { new Date (updated).toDateString()}</Typography>
        
          <Typography>Total Cases infected by COVID-19</Typography>

        </CardContent>

      </Card>
      <Card className='recovered_cases'>
        <CardContent>
          <Typography >Recovered Cases</Typography>
          <h2 > <CountUp
          start={0}
          end={totalRecovered}
          duration={2}
          separator=','></CountUp>
             </h2>
          <h2 ></h2>
          <Typography>Last Updated: { new Date (updated).toDateString()}</Typography>
          <Typography>Total Cases recovered from COVID-19</Typography>
        </CardContent>

      </Card>
      <Card className='death_cases'>
        <CardContent>
          <Typography >Death Cases</Typography>
          <h2 > <CountUp
          start={0}
          end={totalDeaths} 
          duration={2}
          separator=','></CountUp>
             </h2>
          <Typography>Last Updated: { new Date (updated).toDateString()}</Typography>
          <Typography>Total Deaths caused vy COVID-19</Typography>
        </CardContent>
      </Card>
    </div>


  )
}

export default InfoBox