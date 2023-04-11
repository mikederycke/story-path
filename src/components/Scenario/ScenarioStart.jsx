import React, { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'

const ScenarioStart = ({walkthrough, description, onClickStart}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()

  return (
    <div>
        {/* <h4>Beschrijving van het scenario</h4> */}
        <p>{description}</p>
        <h4>Werking van dit scenario</h4>
        {/* <p>{walkthrough}</p> */}
         <p>In dit interactief scenario ga je stap per stap een scene voorgeschoteld krijgen. 
         Per scene dien je de juiste reactie aan te duiden en je argumentatie neer te schrijven. 
         Na elke keuze volgt de feedback. Op het einde van het scenario krijg je een overzicht van al jouw keuzes en argumentatie. 
         </p>
         <p>Gelieve hieronder jouw naam en school email op te geven.</p>
        {/* Input fields */}
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
            <Form.Control
                placeholder="Full name"
                onChange={(e) => setUsername(e.target.value)}
            />
        </InputGroup>
        
        {alert}
        <br></br>
        <Button variant="primary" onClick={() => onClickStart(username, email)}>
            Start het scenario
        </Button>
    </div>
  )
}

export default ScenarioStart