import styled from "styled-components";

export const AdressAndPayementDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 40rem !important;

  h3 {
    font-family: "Baloo 2", sans-serif;
  }
`;

export const AdressCard = styled.div`
  display: flex;

  flex-direction: column;
  padding: 2rem;

  gap: 0.6rem;

  background-color: ${(props) => props.theme["base-card"]};

  .inputs {
    display: flex;
    gap: 0.8rem;
  }

  .CEP {
    width: 30%;
  }

  .NUMERO {
    width: 30%;
  }

  .BAIRRO {
    width: 30%;
  }

  .COMPLEMENTO {
    width: 60%;
  }

  .CIDADE {
    width: 60%;
  }

  .UF {
    width: 10%;
  }
`;

export const PayementCard = styled.div`
  display: flex;

  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2.2rem;

  gap: 0.6rem;

  background-color: ${(props) => props.theme["base-card"]};
`;

export const TitleAdress = styled.div`
  display: flex;

  margin-bottom: 1rem;

  gap: 0.5rem;

  img {
    height: 1.2rem !important;
  }

  div {
    display: flex;
    justify-content: space-around;

    flex-direction: column;

    h3 {
      margin-top: -3px;
      margin-bottom: 0;

      font-size: 1rem;
      font-weight: 100;

      font-family: "Robot", "sans-serif";
    }

    h4 {
      margin-top: 0;
      margin-bottom: 0;

      font-size: 0.9rem;
      font-weight: 100;

      color: ${(props) => props.theme["base-text"]};

      font-family: "Robot", "sans-serif";
    }


  }
`;

export const TitlePayament = styled.div`
  display: flex;

  margin-bottom: 1rem;

  gap: 0.5rem;

  img {
    height: 1.2rem !important;
  }

  div {
    display: flex;
    justify-content: space-around;

    flex-direction: column;

    h3 {
      margin-top: -3px;
      margin-bottom: 0;

      font-size: 1rem;
      font-weight: 100;

      font-family: "Robot", "sans-serif";
    }

    h4 {
      margin-top: 0;
      margin-bottom: 0;

      font-size: 0.9rem;
      font-weight: 100;

      color: ${(props) => props.theme["base-text"]};

      font-family: "Robot", "sans-serif";
    }
  }
`;

export const RadiosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`