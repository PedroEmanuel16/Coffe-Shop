import styled from "styled-components";

export const SectionCoffes = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;
  gap: 0.7rem;

  h2 {
    font-size: 1.7rem;
    font-family: "Baloo 2", sans-serif;
  }
`;

export const CardsCoffes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3.3rem;

  margin-top: 1.3rem;
  margin-bottom: 70px;
`;

export const CoffeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border-radius: 0 1.5rem 0 1.5rem;

  padding: 0 12px;

  background-color: ${(props) => props.theme["base-card"]};

  width: 232px;

  margin-top: -20px;
  font-family: "Baloo 2", sans-serif;

  img {
    position: relative;
    top: -20px;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    text-align: center;
    margin-top: -0.7rem;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.9rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  margin-top: -0.7rem;
  margin-bottom: -0.7rem;
`;

export const Tag = styled.div`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 2rem;

  font-size: 0.6rem;
  padding: 0.3rem;

  font-weight: bold;
  font-family: "Baloo 2", sans-serif;
`;

export const BuyPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: -20px;
  margin-bottom: -15px;

  > h4:first-child {
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-text"]};

    span {
      font-size: 1.8rem;
      color: ${(props) => props.theme["base-title"]};
    }
  }
`;

export const ShoppingCarPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  a {
    border: none;
    padding: 0.5rem;

    cursor: pointer;

    font-size: 1.4rem;

    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["base-card"]};

    border-radius: 0.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AddToShoppingCar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem;

  gap: 0.8rem;
  background-color: ${props => props.theme["base-button"]};

  border-radius: 0.6rem;

  height: 18px;

  font-size: 1.2rem;

  > span:first-child{
    font-size: 2.2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 200;

    cursor: pointer;

    color: ${props => props.theme.purple};
  }
`