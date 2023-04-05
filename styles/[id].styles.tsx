import styled from 'styled-components'
import Image from 'next/image'

export const Link = styled.a`
    color: #111517;

    body.dark & {
        color: hsl(0, 0%, 100%);
    }
`

export const BackBtn = styled.button`
    margin-block: 3.125rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
    border: none;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    padding: .3125rem 1.0313rem .3125rem .5881rem;
    align-items: center;
    color: #111517;
    
    body.dark &{
        background-color: #2B3743;
        box-shadow: none;
        color: hsl(0, 0%, 100%);
    }

    & > p{
        margin-left: .5694rem;
    }
`
export const DetailsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;

    & > div{
        flex-basis: 100%;
    }
    & > div > h2{
        margin-bottom: 1.3125rem;
        font-size: 1.5625rem;
    }

    @media screen and (min-width: 650px){
        gap: 2rem;
    }

    @media screen and (min-width: 1053px){
        gap: 3rem;
    }

    @media screen and (min-width: 1096px){
        gap: 5.625rem;
    }

    @media screen and (min-width: 767px){
        flex-basis: 100%;
    }

    @media screen and (min-width: 1200px){
       flex-basis: 40%;

       & > div{
            flex-basis: initial;
            padding-top: 2.5rem;
       }

       & > div > h2{
        font-size: 2rem;
       }
    }
`

export const ImageBox = styled(Image)`
    margin-bottom: 1.75rem;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (min-width: 650px){
        display: none;
    }
`
export const DesktopImageBox = styled(Image)`
    height: 100%;
    display: none;

    @media screen and (min-width: 650px){
        display: block;
        flex-basis: 100%;
    }

    @media screen and (min-width: 1200px){
       flex-basis: 40%;
    }
`

export const Col = styled.div`
    margin-bottom: 2.1875rem;

    & > p > span{
        font-weight: 600;
    }

    & > p{
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 320px){
        & > h2{
            font-size: 1.1rem;
        }
    }

    @media screen and (min-width: 767px){
        flex-basis: 100%;
    }

    @media screen and (min-width: 1200px){
        flex-basis: 40%;
    }
`

export const Cols = styled.div`
    @media screen and (min-width: 767px){
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`
export const Borders = styled.div`
    margin-bottom: 3.75rem;
    & > p{
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
    }
    & > div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .4375rem;
    }

    & > div > span{
        padding: .3125rem 1.5625rem;
        background-color: #fff;
        border-radius: .25rem;
        box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
    }

    body.dark & > div > span {
        background-color: #2B3743;
        box-shadow: none;
        color: hsl(0, 0%, 100%);
    }

    @media screen and (min-width: 600px){
        display: flex;
        align-items: center;

        & > p{  
            margin-right: 0.8rem;
            margin-bottom: 0;
        }
    }
`