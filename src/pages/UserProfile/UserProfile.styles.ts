import styled from "styled-components";

export const UserProfileHeader = styled.h2`
    color : mediumseagreen;
    margin: 1em;
    padding: 0.25em 1em;
`

export const PrimaryButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: white;
    color: palevioletred;
    border: 2px solid palevioletred;
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    padding: 10px;
    gap: 10px;
`