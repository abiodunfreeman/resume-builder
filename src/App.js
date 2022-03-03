
import './App.css';
import Header from './components/header';
import Inputs from './components/inputs';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    firstName:"Abiodun",
    lastName:"Freeman",
    title:"Jr. Web Dev",
    address:"1404 Hyde Shaffer Road",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet non incidunt earum saepe a nam, dolorem illum doloribus molestiae eius cum mollitia tenetur cupiditate iure, sed debitis voluptas quibusdam quo!",
    email:"ayogidude@gmail.com",
    position:"Server",
    company:"Wild Mango",
    from:"2018",
    to:"2020",
    location:"Lyndhurst",
    university: "Kent State University",
    univCity: "Kent Ohio",
    degree: "Masters",
    subject: "Computer Science", 
    univFrom: "2016",
    univTo: "2020"
  })

  function handleChange (event){
    const {name, value} = event.target
    setInputs(
      {...inputs,
      [name]: value,
    }
    )
}

console.log(inputs)
  return (
    <div className="App">
      <Header/>
      <div id="container">
        <Inputs 
        handleChange={handleChange}
        inputs={inputs}
        setInputs={setInputs}
        />
        <Display
          inputs={inputs}
        />
      </div>
    </div>
  );
}

export default App;
