import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
    font-family: 'Roboto';
    background-color: ${props => props.theme.colors.lightestGrey};
    color: ${props => props.theme.colors.darkestGrey};
    font-size: 14px;
    margin: 0;
  }
`;

export default GlobalStyles;
