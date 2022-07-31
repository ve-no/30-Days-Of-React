const NumberGenerator = () =>{
	var rand = () => Math.floor(Math.random()*100);
	var hexa = new Array(32);
	for(var i = 0; i < 32; i++)
			hexa.push(rand());


	function isPrime(num) {
		let i = 1;
		while (++i < num)
			if (num % i === 0)
				return false;
		return num > 1;
	}

	const checkColor = (num) => ((isPrime(num) ? '#FD5E53' : (num % 2 === 0) ? '#21BF73' : '#FDDB3A'));
	const randomGen = hexa.map((h) =>  <h1  style={{backgroundColor: checkColor(h)}}>{h}</h1>)
	return (
		<div className="NumberGenerator">
			<h1>30 Days Of React</h1>
			<h2>Number Generator</h2>
			<div className="Number">{randomGen}</div>
		</div>
	)
}
export default NumberGenerator
