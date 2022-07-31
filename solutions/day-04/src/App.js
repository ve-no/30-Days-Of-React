import "./App.css"
const rand =()=> '#'+Math.floor(Math.random()*16777215).toString(16)
const hexa = new Array(200).fill(0)
const heading = hexa.map(() => <h1 style={{backgroundColor: rand()}}>{rand()}</h1>)
const App = ()=> (<div> {heading}</div> )
export default App;
