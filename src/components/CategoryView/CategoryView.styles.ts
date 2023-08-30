import styled from "styled-components";

// interface PrimaryButtonInterface {
//     isDeleteButton : boolean;
// }

//using prop customized both delete and add buttons
// export const PrimaryButton = styled.button<PrimaryButtonInterface>`
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border-radius: 3px;
//     background-color: white;
//     ${prop => prop.isDeleteButton ?
//         'color: tomato; border: 2px solid tomato; margin-left:0em; ' :
//         'color: mediumseagreen; border: 2px solid mediumseagreen;'
//     }
// `;

export const PrimaryButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: white;
`;

//use a customized styled componenet button as the base of another buttons.
export const DeleteButton = styled(PrimaryButton)`
    margin-left:0em;
    color: tomato; 
    border: 2px solid tomato;
`;

export const UpdateButton = styled(PrimaryButton)`
    margin-left:0em;
    color: darkorange; 
    border: 2px solid darkorange;
`;

export const AddButton = styled(PrimaryButton)`
    color: mediumseagreen;
    border: 2px solid mediumseagreen;
`;