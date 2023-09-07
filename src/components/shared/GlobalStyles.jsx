import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'League Spartan';
        src: local('League Spartan'), 
             url(${
               process.env.PUBLIC_URL +
               "/assets/fonts/league-spartan-v11-latin-regular.woff2"
             }) format('woff2');
        font-weight: 400;
        font-style: normal;
    }

      @font-face {
        font-family: 'League Spartan';
        src: local('League Spartan Bold'), 
             url(${
               process.env.PUBLIC_URL +
               "/assets/fonts/league-spartan-v11-latin-700.woff2"
             }) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
        @font-face {
        font-family: 'Cabin';
        src: local('Cabin'), 
             url(${
               process.env.PUBLIC_URL +
               "/assets/fonts/cabin-v26-latin-regular.woff2"
             }) format('woff2');
        font-weight: 400;
        font-style: normal;
    }

      @font-face {
        font-family: 'Cabin';
        src: local('Cabin Bold'), 
             url(${
               process.env.PUBLIC_URL +
               "/assets/fonts/cabin-v26-latin-700.woff2"
             }) format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
    font-family: 'Helvetica';
    src: local('Helvetica'), 
         url(${
           process.env.PUBLIC_URL + "/assets/fonts/Helvetica Roman.ttf"
         }) format('truetype');
    font-weight: 400;
    font-style: normal;

    @font-face {
    font-family: 'Helvetica';
    src: local('Helvetica Bold'), 
         url(${
           process.env.PUBLIC_URL + "/assets/fonts/Helvetica Bold Condensed.otf"
         }) format('opentype');
    font-weight: 700;
    font-style: normal;
}
}

    // You can add more global styles here, if needed.
`;

export default GlobalStyles;
