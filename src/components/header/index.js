import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Item, Logo,ButtonLink,Background} from "./style/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : {children};
}

Header.Item = function HeaderItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <RouterLink to={to}>
      <Logo {...props} />;
    </RouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
}
