import React, { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'

const ScenarioStart = ({step, walkthrough, description, onClickStart}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()


    const contentList = (content) => {
        return (
          <ul key={Math.random()}>
            {content.map(e => 
                <li key={Math.random()}>
                  {e.title ?  <i>{e.title}: </i>: null}
                  {e.descr}
                  {e.content ? contentList(e.content) : null}
                </li>
            )}
          </ul>
        )
      }
  return (
    <div>
        {/* <h4>Beschrijving van het scenario</h4> */}
        <p>{description}</p>
        {/* {step.goals ? 
            <div>
                <h4>{step.goals.title}</h4>
                <ul>
                    {step.goals.list.map(e => 
                        <li key={Math.random()}>{e}</li>
                    )}
                </ul>
            </div> : null}

        {step.theory ? 
            <div>
                <h4>{step.theory.title}</h4>
                <p>{step.theory.description}</p>
                <ul>
                    {step.theory.list.map(e => 
                        <div key={e.block}>
                            <h6>{e.title}</h6>
                                {contentList(e.content)}
                        </div>
                    )}
                </ul>
            </div> : null}
         */}

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