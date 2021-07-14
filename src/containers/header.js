import React from "react";
import  Header  from "../components/header";
import * as ROUTES from "../constants/route";

 function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Item>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Item>
      {children}
    </Header>
  );
}

export default HeaderContainer;