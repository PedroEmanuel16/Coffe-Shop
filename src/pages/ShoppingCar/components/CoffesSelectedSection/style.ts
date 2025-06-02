import styled from "styled-components";

export const CoffesSelectedDiv = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.5rem;

  width: 28rem !important;

  h3 {
    font-family: "Baloo 2", sans-serif;
  }
`;

export const CoffesCard = styled.div`
  display: flex;

  flex-direction: column;
  padding: 2rem;

  gap: 0.6rem;

  background-color: ${(props) => props.theme["base-card"]};

  border-radius: 0 1.7rem 0 1.7rem;

`;

export const Coffes = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 340px;
  overflow-y: auto;
  width: 104%;
  gap: 0.6rem;
  padding-right: 1rem;

  /* Chrome, Edge, Safari */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.5);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
    width: 0;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0.5) transparent;
`;


