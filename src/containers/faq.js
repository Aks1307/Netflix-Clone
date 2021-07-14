import React from "react";
import Accordion from "../components/accordion";
import InputBox from "../components/input";
import faqData from "../fixtures/faqs.json";

function AccordionComponent() {
  return (
    <Accordion>
      <Accordion.Title>frequently asked Questions</Accordion.Title>
      {faqData.map((faq) => {
        return (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>
              <Accordion.Text>{faq.body}</Accordion.Text>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
      <InputBox>
        <InputBox.Text>
          Ready to watch? Enter your email address to create or restart your
          membership.
        </InputBox.Text>
        <InputBox.Container>
          <InputBox.Input placeholder="E-mail address" />
          <InputBox.Button>Start</InputBox.Button>
        </InputBox.Container>
      </InputBox>
    </Accordion>
  );
}

export default AccordionComponent;
