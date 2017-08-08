import React from 'react'
import moment from 'moment'

const MinutelyForecast = ({ forecastData }) => {
	const renderForecasts = forecastData.map(({ precipIntensity, precipProbability, time }, index) => 
		<div key={index} className="forecast-card">
			<p>{moment.unix(time).format('LT')}</p>
			<p>Intensity of Precipitation: {Math.round(precipIntensity * 100)}%</p>
			<p>Chance of Precipitation: {Math.round(precipProbability * 100)}%</p>
		</div>
	)

	return (
		<div>
			<h2>Minutely Forecast</h2>
			{renderForecasts}
		</div>
	)
}

export default MinutelyForecast