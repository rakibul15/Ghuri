import React, { useState } from 'react'
import { Accordion, Button, Card, useAccordionToggle } from "react-bootstrap";
import data from "./FighterFaQData"
import plus from "../../images/ParcelDetails/plus.png"
import minus from "../../images/ParcelDetails/minus.png"
const IamFighter = () => {
  const [expanded, setExpanded] = useState(0)
  const [questions, setQuestions] = useState(data)
    return (
      <>
      {questions.map((question,index) => (
             
           
        <Accordion>
          <div className="accordion_faq">
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              onClick={()=>{if(expanded === 0){
                  setExpanded(question.id)
              }
              else{
                  setExpanded(0)
              }
                  
              }}
            >
              {(expanded=== question.id)? (
                 <img src={minus} alt="" />
                // <i class="fa fa-minus"></i>
               
              ) : (
                <img src={plus} alt="" />
              )}
              {question.title}
            
            </Accordion.Toggle>
  
            <Accordion.Collapse eventKey="0">
              <Card.Body className="collapse_body">{question.info}</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
         ))}
      </>
    )
}

export default IamFighter
