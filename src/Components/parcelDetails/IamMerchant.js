import React, { useState } from "react";
import { Accordion, Button, Card, useAccordionToggle } from "react-bootstrap";
import data from "./MarchentFaQData"
const IamMerchant = () => {
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
              <i class="fa fa-minus"></i>
            ) : (
              <i class="fa fa-plus"></i>
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
  );
};

export default IamMerchant;
