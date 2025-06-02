import styled from "styled-components";

export const DataOrderMain = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DataOrderGeneral = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Baloo 2", sans-serif;
    color: ${props => props.theme["yellow-dark"]};

    margin-bottom: -17px;
  }

  p {
    font-family: "Baloo 2", sans-serif;

    color: ${props => props.theme["base-subtitle"]};
  }
`;

export const CardDataOrder = styled.div`
  border: 1px solid ${(props) => props.theme.yellow};

  border-radius: 0 1.7rem 0 1.7rem;

  gap: 1.3rem;

  padding: 1.7rem 7rem 1.7rem 1.7rem;

  display: flex;
  flex-direction: column;
`;

export const InfoOrder = styled.div`
    display: flex;
    gap: 0.8rem;
`

export const InfoOrderIcon = styled.div`
  color: ${(props) => props.theme.white};

  .pinLocal {
    background-color: ${(props) => props.theme.purple};
    padding: 0.5rem;
    border-radius: 1rem;

    font-size: 1.3rem;
  }

  .clock {
    background-color: ${(props) => props.theme.yellow};
    padding: 0.5rem;
    border-radius: 1rem;

    font-size: 1.3rem;
  }

  .money {
    background-color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.5rem;
    border-radius: 1rem;

    font-size: 1.3rem;
  }
`;

export const InfoOrderText = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: -5px;

  font-family: "Baloo 2", sans-serif;

  h4 {
    margin: 0;

    font-size: 1rem;

    font-weight: 100;
  }

  span {
    font-weight: bold;
  }
`;