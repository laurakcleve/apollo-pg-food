import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.lightestGrey};
    color: ${props => props.theme.colors.darkestGrey};
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
    font-family: 'Roboto';
    font-size: 14px;
  }
`;

export default GlobalStyles;
