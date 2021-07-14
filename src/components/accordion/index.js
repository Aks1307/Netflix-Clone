import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Header,
  Text,
  Body,
  Item,
  Title,
  Frame,
} from "./styles/accordion";

const ToggleContext = createContext();

function Accordion({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggle, setToggle } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggle(!toggle)} {...props}>
      {children}
      {toggle ? (
        <img src={"/images/icons/close.png"} />
      ) : (
        <img src={"/images/icons/add.png"} />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggle } = useContext(ToggleContext);
  return toggle ? <Body {...props}>{children}</Body> : null;
};

Accordion.Text = function AccordionText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Accordion.Title = function AccordionTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
};

export default Accordion;
