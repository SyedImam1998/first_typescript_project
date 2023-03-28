
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Private from './components/passing_comp_props/Private';
import Profile from './components/passing_comp_props/Profile';
import User from './components/User';

function App() {
  const person={
    name:"syed",
    last:"imam",
  }

  let postion: 'left-top'|
  'left-center'|
  'left-bottom'|
  'center-top'|
   'center-center'| 
   'center-bottom'|
    'right-top'|' right-center'| 'right-bottom'

  const names=[
    {
      name:"syed",
      last:"rafi",
    },{
      name:"syed",
      last:"siraj",
    },{
      name:"syed",
      last:"meeraj",
    }
  ]
  return (
    <div className="App">
     <Greet name="imam"></Greet>
     <Person firstName='Syed' lastName='Imam'></Person>
     <PersonList names={names}></PersonList>

     <Heading>hello Every One</Heading>
     <Oscar><Heading>Oscar goes to lenoadio</Heading></Oscar>
     <Button handleClick={(event,id)=>{
      console.log("helo");
     }}></Button>

     <Container style={{border:"1px solid red", fontSize:"86px"}}></Container>
     <User></User>

     <Private isLogged={true} component={Profile}></Private>
    </div>
  );
}

export default App;



