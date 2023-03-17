import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const InfoSection = ({description, list, title, id}) => {
  return (
    
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {description}
        <ul>
            {list.map(e => 
                <li>{e}</li>
            )}
        </ul>
        </Accordion.Body>
      </Accordion.Item>
  
    
  )
}

export default InfoSection