import styled from "styled-components";

export const MainModal = styled.main`
  position: relative;
  height: 60vh;
  max-width: calc(100vw - 20px);
  width: 850px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px ${({ theme: { brown01 } }) => `${brown01}4f`};
  background-color: ${({ theme: { brown03 } }) => brown03};
`;

export const ContentImage = styled.img`
  height: 100%;
  width: 50%;
`;

export const ContentBody = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: calc(var(--seven-px) * 2.5);

  & > * {
    color: ${({ theme: { white01 } }) => white01};
    margin-bottom: calc(var(--seven-px) * 1.4);
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const MainTitle = styled.h4`
  font-family: Roboto;
  font-size: 3rem;
  font-weight: bolder;
  opacity: 0.45;
`;

export const TraitsScroller = styled.div`
  height: fit-content;
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  border-radius: 5px;
  box-shadow: 0px 2px 3px #0003 inset, 0px -2px 3px #0003 inset;
`;

export const TraitsTitle = styled.h4`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: var(--ten-px);
`;

export const TraitsContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const TraitCard = styled.div`
  height: 70px;
  width: 40%;
  min-width: 130px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  margin: var(--seven-px) var(--ten-px);
  padding: 0px calc(var(--ten-px) * 1.8) 0px var(--seven-px);
  background-color: ${({ theme: { black01 } }) => `${black01}88`};

  * {
    color: ${({ theme: { white01 } }) => white01};
  }
`;

export const TraitIcon = styled.img`
  --size: 35px;
  height: var(--size);
  width: var(--size);
  margin-right: calc(var(--ten-px) * 0.5);
`;

export const TraitType = styled.h4`
  font-size: 0.95rem;
  opacity: 0.4;
  width: fit-content;
`;

export const TraitValue = styled.h4`
  font-size: 1.05rem;
  width: fit-content;
`;

export const TokenOwner = styled.h4`
  color: ${({ theme: { blue02 } }) => blue02};
  font-family: "Nunito Sans";
  font-size: 105rem;
  font-weight: 400;

  span {
    font-size: 0.95rem;
    font-weight: bolder;
    opacity: 0.45;
  }
`;
