import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header` 
  height: 80px;
  border-bottom: 2px solid #ccc;

  div {
    display: flex;
    align-items: flex-end;
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
  }

`;

const StyledLink = styled(Link)`
  margin-right: 50px;
  margin-bottom: -2px;
  padding-bottom: 10px;
  border-bottom: ${props => (props.pathname === props.to ? `5px solid ${props.theme.colors.teal}` : '5px solid transparent')};
  color: ${props => (props.pathname === props.to ? props.theme.colors.teal : props.theme.colors.darkGrey)};
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
`;

const Header = ({ location }) => (
  <StyledHeader>
    <div>
      <StyledLink to="/inventory" pathname={location.pathname}>Inventory</StyledLink>
      <StyledLink to="/dishes" pathname={location.pathname}>Dishes</StyledLink>

    </div>
  </StyledHeader>
);

Header.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
