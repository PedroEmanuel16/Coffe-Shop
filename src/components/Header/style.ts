import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      text-decoration: none;
      gap: 0.2rem;
    }

    .localization {
      color: ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme["purple-light"]};
    }

    .shopping-car {
      color: ${(props) => props.theme.yellow};
      background-color: ${(props) => props.theme["yellow-light"]};
      position: relative;
    }

    .quantityCart {
      position: absolute;
      top: -7px;
      right: -9px;

      background-color: ${(props) => props.theme["yellow-dark"]};
      padding: 0.1rem 0.4rem;
      border-radius: 1rem;

      color: ${(props) => props.theme.white};
    }
  }
`;