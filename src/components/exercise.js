import {useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import YoutubeVideo from './youtubeVideo';
import Accordion from 'react-bootstrap/Accordion'
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';




function Exercise({ex, onClick}) {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [alert, setAlert] = useState(false)

  

  function handleFormSubmit(e) {
    e.preventDefault()
    if (username && email) {
      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username})
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }else{
      //show react bootstrap alert

    }
  }


  return (
    <Accordion.Item eventKey={ex.id}>
        <Accordion.Header>{ex.title}</Accordion.Header>
          <Accordion.Body>
          <p>{ex.description}</p>
          
          <div className="row">
            <div className="col-12">
              <YoutubeVideo videoId={ex.startVideoId} />
            </div>
          </div>
          <br></br>
        
          <div className="row">
            <div className="col-6">
              <p>{ex.titleChoiceA}</p>
              <YoutubeVideo videoId={ex.videoIdChoiceA} />
            </div>
            <div className="col-6">
            <p>{ex.titleChoiceB}</p>
              <YoutubeVideo videoId={ex.videoIdChoiceB} />
            </div>
          </div>
          <br></br>
          {/* Input fields */}
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
              placeholder="email"
              />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
              <Form.Control
              placeholder="Full name"
              onChange={(e) => setUsername(e.target.value)}
              />
          </InputGroup>
          <p>Welke video heeft de beste reactie? En waarom? Argumenteer!</p>
          <FloatingLabel controlId="floatingTextarea2" label="Argumentatie">
          <Form.Control
            as="textarea"
            placeholder="Jouw argumentatie..."
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <br></br>
        {alert}
        <br></br>
        <Button variant="primary" onClick={onClick}>Stuur antwoord op</Button>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Exercise