import React from 'react';
import './Newsfeed.css';
import LineGraph from '../LineGraph/LineGraph.js';

function Newsfeed() {
  return (
    <div className='newsfeed'>
      <div className='newsfeed_portfolio'>
        <h1>500,000</h1>
        <p>+$576.32 (+0.04%) Today</p>
      </div>
      <div className='portfolio_chart_container'>
        <LineGraph />
      </div>
    </div>
  )
}

export default Newsfeed