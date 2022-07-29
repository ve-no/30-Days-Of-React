import css_logo from './imgs/css_logo.png';
import html_logo from './imgs/html_logo.png';
import react_logo from './imgs/react_logo.png';

function Input({type, holder})
{
  return (
    <input type={type} className="form-control" placeholder={holder}></input>

)  }

const subscribe = (
  <div className="subscribe">
    <h1>subscribe</h1>
    <p>sign up with your email adress to receive news and updates.</p>
    <div className='input-group'>
      <Input type = 'text' holder='firstName' />
      <Input type = 'text' holder='Last Name' />
      <Input type = 'email' holder='Email' />
    </div>
    <button className="btn">subscribe</button>
  </div>
)
const header = (
  <div className="container">
      <h1>Front End Technologies</h1>
      <div className="imgs">
        <img src={css_logo}/>
        <img src={html_logo}/>
        <img src={react_logo}/>
      </div>
    </div>
)
const skils = ['HTML', 'CSS', 'JavaScript', 'react', 'nextJs',  'nodeJS' , 'sass', 'php', 'github', ' wordpress', 'angular' , 'c']
const span = skils.map(s=> <span> {s} </span>)
const profile = (
  <div className="profile">
    <img src={react_logo}/>
    <h1>Elbakouri Allal <span>✔</span></h1>
    <p>fornt end devloper with 3y experience</p>
    <div className="skills">
      {span}
      {span}
    </div>
  </div>
)
function App() {
  return (
    <div>
      {header}
      {subscribe}
      {profile}
    </div>
  )
}
export default App;
