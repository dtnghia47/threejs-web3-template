/**
 *
 * Layout
 *
 */
import React, { memo, useCallback } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface Props {
  children?: any;
}

export const Layout = memo((props: Props) => {
  const { children } = props;
  const { i18n } = useTranslation();
  const handleChangeLanguage = useCallback((e) => {
    i18n.changeLanguage(e.target.value);
  }, []);
  return (
    <LayoutWrapper className="page-wrapper">
      <Header>
        <Menu>
          <MenuItem exact to="/" activeClassName="active">Dashboard </MenuItem>
          <MenuItem exact to="/home" activeClassName="active">Home </MenuItem>
          <MenuItem exact to="/count" activeClassName="active">Count </MenuItem>
          <MenuItem exact to="/persist" activeClassName="active">Persist </MenuItem>
        </Menu>
        <select onChange={handleChangeLanguage}>
          <option value="en">EN</option>
          <option value="vi">VI</option>
        </select>
      </Header>
      <Main>{children}</Main>
      {/* footer */}
    </LayoutWrapper>
  );
});

const LayoutWrapper = styled.div`
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  background: #CCCCCC;
`;

const Menu = styled.div`
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  margin-left: 30px;
  font-weight: bold;
  color: #24a9a7;

  &:hover {
    text-decoration: none;
  }

  &.active {
    text-decoration: underline;
  }
`;

const Main = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

export default Layout;