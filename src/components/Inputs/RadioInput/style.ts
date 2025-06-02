import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;

  /* Aqui está o truque! Quando o input estiver checked, estilize o label seguinte */
  input[type="radio"]:checked + label {
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;

export const RadioInputStyled = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${props => props.theme["base-button"]};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: 0.7rem;

  width: 150px;

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
  }

  svg {
    color: #444;
  }

  span {
    color: #333;
    font-weight: 100;
  }
`;
