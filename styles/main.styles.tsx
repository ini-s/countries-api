import styled from 'styled-components'
import Image from 'next/image'

export const HeaderStyle = styled.header`
    padding: 1.875rem 1.25rem;
    box-shadow: 0 2px 8px rgba(99, 99, 99, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    body.dark &{
        background-color: #2B3743;
        box-shadow: none;
    }

    & > p{
        font-weight: 900;
    }

    &  > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > div > svg{
        margin-right: .5rem;
    }

    & > div > p{
        font-size: 14px;
        font-weight: 600;
    }

    @media screen and (max-width: 320px){
        & > p{
            font-size: 14px;
        }

        & > div > p{
            font-size: 12px;
        }
    }
`

export const Search = styled.div`
    margin: 1.875rem 0 2.5rem 0;
    position: relative;
 
    @media screen and (min-width: 767px){
        flex-basis: 55%;
    }
`
export const SearchBox = styled.input`
    padding: 1rem 1.3125rem 1rem 3.75rem;
    width: 100%;
    margin-left: -0.03rem;
    border-radius: 4px;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
    border: none;
    color: #858585;
    font-size: 14px;
    outline: none;

    &::placeholder {
        color: #858585;
    }

    body.dark &{
        background-color: #2B3743;
        box-shadow: none;
    }
`

export const SearchIcon = styled.div`
    position: absolute;
    top: 1.055rem;
    left: 1.3675rem;
    color: #858585;
`

export const Filter = styled.div`
    padding: 1.0625rem 1.25rem .875rem	1.25rem;
    width: 190px;
    height: fit-content;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);

    & > div{
        cursor: pointer;
    }

    body.dark &{
        background-color: #2B3743;
        box-shadow: none;
    }
`

export const ErrorMessage = styled.p`
    color: black;

    & > span{
        font-weight: 600;
    }
`

export const Top = styled.section`
    position: relative;
    @media screen and (min-width: 767px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Dropdown = styled.ul`
    list-style: none;
    width: 190px;
    padding: 1rem;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: -11rem;
    z-index: 5;
    border-radius: 4px;

    & > li {
        font-size: 14px;
        margin-bottom: 0.5rem;
        cursor: pointer;
        border: none;
        background-color: white;
        display: block;
    }

    @media screen and (min-width: 767px){
        right: 0;
        left: auto;
        bottom: -9rem;
    }
`

export const Countries = styled.section`
    margin: 2.8125rem 0 1.875rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    body.dark & > a{
        color: hsl(0, 0%, 100%)
    }

    & > a{
        flex-basis: 250px;
        display: block;
        color: black;
    }

    @media screen and (min-width: 1200px){
        & > a{
        flex-basis: 300px;
        }
    }
`

export const CountriesBox = styled.section`
    margin: 2.8125rem 0 1.875rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    
    body.dark & > a{
        color: hsl(0, 0%, 100%);
    }

    & > a{
        flex-basis: 250px;
        margin: 2.8125rem 0 1.875rem 0;
        display: block;
        color: black;
    }

    @media screen and (min-width: 767px){
        justify-content: start;
        gap: 3rem;
    }

    @media screen and (min-width: 1200px){
        & > a {
            flex-basis: 300px;
        }
    }
`

export const Country = styled.div`
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
    position: relative;
    margin-bottom: 2rem;

    body.dark &{
        box-shadow: none;
    }
`

export const Flag = styled(Image)`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    display: block;
    object-fit: cover;
`

export const Description = styled.div`
    padding: 2rem 1.5625rem 2.3rem 1.5625rem;
    background-color: #fff;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    body.dark &{
        background-color: #2B3743
    }

    & > p{
        font-size: 14px;
    }

    & > h2, p{
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 320px){
        & > h2{
            font-size: 1.1rem;
        }
    }
`
export const Bold = styled.span`
    font-weight: 600;
`

export const Pagination = styled.div`
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;
`
export const Btn = styled.div`
    font-size: 2rem;
    display: flex;

    body.dark &{
        color: hsl(0, 0%, 100%);
    }
`

export const PageNumbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 1.2rem;
    margin: 0 1rem;

    body.dark & {
        color: hsl(0, 0%, 100%);
    }
`