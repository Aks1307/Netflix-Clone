import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import Feature from "../components/feature";
import AccordionComponent from "../containers/faq";
import HeaderContainer from "../containers/header";
import InputBox from "../components/input";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <InputBox>
          <Feature>
            <Feature.Title>
              Unlimited films, TV programmes and more.
            </Feature.Title>
            <Feature.SubTitle>
              Watch anywhere. Cancel at any time.
            </Feature.SubTitle>
            <InputBox.Text>
              Ready to watch? Enter your email address to create or restart your
              membership.
            </InputBox.Text>
            <InputBox.Container>
              <InputBox.Input placeholder="E-mail address" />
              <InputBox.Button>Start</InputBox.Button>
            </InputBox.Container>
          </Feature>
        </InputBox>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionComponent />
      <FooterContainer />
    </>
  );
}
