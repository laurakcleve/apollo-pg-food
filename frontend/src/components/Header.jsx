import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 2px solid #ccc;
  height: 80px;

  div {
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
  }

`;

const StyledLink = styled(Link)`
  color: ${props => (props.pathname === props.to ? props.theme.colors.teal : props.theme.colors.darkGrey)};
  border-bottom: ${props => (props.pathname === props.to ? `5px solid ${props.theme.colors.teal}` : '5px solid transparent')};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
  padding-bottom: 10px;
  margin-bottom: -2px;
`;

const Header = ({ location }) => (
  <StyledHeader>
    <div>
      <StyledLink to="/inventory" pathname={location.pathname}>Inventory</StyledLink>
      <StyledLink to="/dishes" pathname={location.pathname}>Dishes</StyledLink>

    </div>
  </StyledHeader>
);

export default withRouter(Header);
