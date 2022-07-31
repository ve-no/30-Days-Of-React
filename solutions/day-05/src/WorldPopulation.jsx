
const tenHighestPopulation = [
	{ country: 'World', population: 7693165599 },
	{ country: 'China', population: 1377422166 },
	{ country: 'India', population: 1295210000 },
	{ country: 'United States of America', population: 323947000 },
	{ country: 'Indonesia', population: 258705000 },
	{ country: 'Brazil', population: 206135893 },
	{ country: 'Pakistan', population: 194125062 },
	{ country: 'Nigeria', population: 186988000 },
	{ country: 'Bangladesh', population: 161006790 },
	{ country: 'Russian Federation', population: 146599183 },
	{ country: 'Japan', population: 126960000 },
  ]
  let country = [] , population = [], calc = [];

  for(let i = 0; i < tenHighestPopulation.length; i++) {
	country.push(tenHighestPopulation[i].country);
    population.push(tenHighestPopulation[i].population);
	calc.push((tenHighestPopulation[i].population / 10000000).toString() + 'px');
}


const  numberWithCommas = (x) =>x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

population= population.map( (p) =>  numberWithCommas(p))


const WorldPopulation = () => {
	const countries =  country.map(c => <h1>{c}</h1>)
	const pop = population.map(p => <h1>{p}</h1>)
	const calcGraph = calc.map(c =>
						<h1 style={{width: c}} className="gra"></h1>)
	return <div className="WorldPopulation">
				<h1>30 Days Of React</h1>
				<h2>World Population</h2>
				<p>Ten most population countrie</p>
				<div className="graph">
					<div>{countries}</div>
					<div>{calcGraph}</div>
					<div>{pop}</div>
				</div>
			</div>;
}
export default WorldPopulation;
