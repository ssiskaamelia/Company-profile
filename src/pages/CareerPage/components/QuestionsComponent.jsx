import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const QuestionsComponent = () => {
  const [question, setQuestion] = React.useState([
    {
      id: "1",
      question: "Question 1",
      answer: "Answer for question number 1",
    },
    {
      id: "2",
      question: "Question 2",
      answer: "Answer for question number 2",
    },
    {
      id: "3",
      question: "Question 3",
      answer: "Answer for question number 3",
    },
    {
      id: "4",
      question: "Question 4",
      answer: "Answer for question number 4",
    },
    {
      id: "5",
      question: "Question 5",
      answer: "Answer for question number 5",
    },
  ]);
  const [open, setOpen] = React.useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="container container-sm mt-3">
      <h2 className="title mb-5">TANYA & JAWAB</h2>
      <Accordion className="mt-2" open={open} toggle={toggle}>
        {question.map((data) => (
        <AccordionItem>
          <AccordionHeader targetId={data.id}>{data.question}</AccordionHeader>
          <AccordionBody accordionId={data.id}>
            {data.answer}
          </AccordionBody>
        </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default QuestionsComponent;
