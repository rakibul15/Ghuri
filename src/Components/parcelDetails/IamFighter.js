import React from 'react'
import { Accordion, Button, Card, useAccordionToggle } from "react-bootstrap";
const IamFighter = () => {
    return (
        <>
            <Accordion>
      <div className="accordion_faq">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <i class="fa fa-plus"></i> How do I contact the deliverer?
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body className="collapse_body">Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </div>

      <div className="accordion_faq">
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          <i class="fa fa-plus"></i> How do I cancel request
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="1">
          <Card.Body className="collapse_body">
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </div>
      <div className="accordion_faq">
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          <i class="fa fa-plus"></i> How do I track my delivery?
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="2">
          <div className="collapse_body">
            <Card.Body>Hello! I'm another body</Card.Body>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
        </>
    )
}

export default IamFighter
