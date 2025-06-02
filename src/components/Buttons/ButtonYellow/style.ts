import styled from "styled-components";

export const ButtonYellowStyled = styled.button`
    border: none;
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};

    border-radius: 0.6rem;

    width: 100%;

    font-size: 0.9rem;

    font-weight: bold;

    padding: 0.9rem;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
    }
`