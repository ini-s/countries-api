import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    body{
        font-family: 'Nunito Sans', sans-serif;
        background-color: hsl(0, 0%, 98%);
        color: hsl(200, 15%, 8%);
        
    }

    body.dark{
        background-color: hsl(207, 26%, 17%);
        color: hsl(0, 0%, 100%);
    }

    main{
        padding: 0 1.25rem;
    }

    a{
        text-decoration: none;
    }

    a, button{
        cursor: pointer;
    }

    h1{
        font-size: 2.5rem;
    }

    p{
        line-height: 1.5;
    }

    @media screen and (min-width: 1440px){
        body{
            max-width: 1500px;
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 768px){
        main{
            padding: 0 1.5rem;
        }
    }

    @media screen and (min-width: 967px){
        main{
            padding: 0 3.75rem;
        }
    }

    @media screen and (max-width: 320px){
        body{
            font-size: 14px;
        }
    }

`

export default GlobalStyles