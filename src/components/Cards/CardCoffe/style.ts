import styled from "styled-components";

export const CardCoffeStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 1rem;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${props => props.theme["base-button"]};

  h4 {
    font-weight: 100;

    margin-top: 2.5px;
  }

  .coffeImage {
    height: 64px;
  }
`;

export const InfoCardCoffe = styled.div`
    display: flex;
    flex-direction: column;

`

export const ActionsCardCoffe = styled.div`
    display: flex;
    gap: 0.6rem;

    margin-top: -13px;
`

export const ChooseQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  border-radius: 0.5rem;

  gap: 0.8rem;

  height: 32px;

  font-size: 0.9rem;

  background-color: ${(props) => props.theme["base-button"]};

  span {
    color: ${(props) => props.theme.purple};

    font-size: 1.4rem;

    cursor: pointer;
  }

  h4 {
    margin-top: 20px;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 32px;

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  border-radius: 0.5rem;

  cursor: pointer;

  font-size: 0.7rem;

  background-color: ${(props) => props.theme["base-button"]};

  span {
    color: ${(props) => props.theme.purple};
  }

  h4 {
    margin-top: 15px;
  }
`;
