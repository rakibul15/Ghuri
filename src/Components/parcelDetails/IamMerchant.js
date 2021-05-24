import React, { useState } from "react";
import { Accordion, Button, Card, useAccordionToggle } from "react-bootstrap";
import data from "./MarchentFaQData"
import plus from "../../images/ParcelDetails/plus.png"
import minus from "../../images/ParcelDetails/minus.png"
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
                <img src={minus} alt="" />
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
  );
};

export default IamMerchant;
