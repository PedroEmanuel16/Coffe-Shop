import styled from "styled-components";

export const TextInputStyled = styled.input`
    padding: 1rem;
    border: none;

    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};

    border: 1px solid ${props => props.theme["base-button"]};

    outline: none;

    border-radius: 0.5rem;
`