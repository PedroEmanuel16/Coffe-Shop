import styled from "styled-components";

export const PresetationSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`

export const TextPresetation = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Baloo 2", sans-serif;

  width: 588px;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
    font-size: 2.8rem;
    margin-bottom: 0;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.2rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    width: 18rem;
    gap: 0.7rem;
    max-width: 100%;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-top: 1rem;

    svg {
      padding: 0.4rem;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
    }

    .card-shopping {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }

    .box {
      background-color: ${(props) => props.theme["base-text"]};
    }

    .clock {
      background-color: ${(props) => props.theme.yellow};
    }

    .cup-coffe {
      background-color: ${(props) => props.theme.purple};
    }
  }
`;