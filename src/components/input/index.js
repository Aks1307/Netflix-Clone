import React from "react";
import { Container, Input, Button, Text, Inner } from "./styles/input";

function InputBox({ children, ...props }) {
  return <Inner {...props}>{children}</Inner>;
}

InputBox.Container = function InputBoxContainer({ ...restProps }) {
  return <Container {...restProps}></Container>;
};

InputBox.Input = function InputBoxInput({ ...restProps }) {
  return <Input {...restProps} />;
};

InputBox.Button = function InputBoxButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

InputBox.Text = function InputBoxText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default InputBox;
