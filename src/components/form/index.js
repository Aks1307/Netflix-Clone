import React from "react";
import { Container, Title, Button, Input } from "./styles/form";

function Form({ children, ...props }) {
  return <Container></Container>;
}

Form.Title = function FormTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Form.Button = function FormButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

Form.Input = function FormInput({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
};

export default Form;
