const HexaColor = () => {
	const rand =()=> '#'+Math.floor(Math.random()*16777215).toString(16)
	const hexa = new Array(32).fill(0)
	const heading = hexa.map(() => <h1 style={{backgroundColor: rand()}}>{rand()}</h1>)
	return <div className="HexaColor">
				<h1>30 Days Of React</h1>
				<h2>Hexadecimal Generator</h2>
				<div className =  "Number">{heading}</div>
			</div>;
}
export default HexaColor;
