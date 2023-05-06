import styled from "styled-components";

interface PrimaryButtonInterface {
    isDeleteButton : boolean;
}

export const PrimaryButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: white;
`;

export const DeleteButton = styled(PrimaryButton)`
    margin-left:0em;
    color: tomato; 
    border: 2px solid tomato;
`;

export const AddButton = styled(PrimaryButton)`
    color: mediumseagreen;
    border: 2px solid mediumseagreen;
`;