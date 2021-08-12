import React from "react";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 47px;
  & a:not(:last-child) {
    box-sizing: border-box;
    border-right: 1px solid white;
  }
`;

const NavigatorItem = styled.a`
  display: grid;
  place-items: center;
`;

export default function NavigationRow() {
  const navItems = [
    { href: "/catalog", label: "Каталог" },
    { href: "/catalog", label: "Доставка" },
    { href: "/catalog", label: "Коллекции" },
    { href: "/catalog", label: "Контакты" },
  ];
  return (
    <NavigationWrapper>
      {navItems.map(({ href, label }, i) => (
        <NavigatorItem href={href}>{label}</NavigatorItem>
      ))}
    </NavigationWrapper>
  );
}
