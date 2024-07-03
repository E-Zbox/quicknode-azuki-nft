import styled from "styled-components";

interface ISelected {
  $selected: boolean;
}

interface IMainCard extends ISelected {
  $bgImg: string;
}

export const MainCard = styled.div<IMainCard>`
  --margin: calc(var(--ten-px) * 2);
  --size: 220px;
  position: relative;
  height: var(--size);
  width: var(--size);
  background: url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-size: 100%;
  border-radius: 15px;
  margin: 0px auto var(--margin) auto;
  ${({ $selected, theme: { blue01 } }) =>
    $selected
      ? `
    border: 4px solid ${blue01}FD;
    scale: 1;
  `
      : `
      scale: 0.95;
      border: 0px solid transparent;
  `}

  &:hover {
    scale: 1;
  }

  &:active {
    scale: 0.97;
  }
`;

export const TokenId = styled.h4<ISelected>`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.95rem;
  padding: 7px 12px;
  border-radius: 30px;
  box-shadow: 1px 1px 5px ${({ theme: { white01 } }) => `${white01}13`},
    -1px -1px 5px ${({ theme: { white01 } }) => `${white01}13`};
  ${({ $selected, theme: { black01, blue01, blue02 } }) =>
    $selected
      ? `
  color: ${black01};
  background: linear-gradient(to top left, ${blue01}, ${blue01}, ${blue01}42);`
      : `
  color: ${blue01};
  background: linear-gradient(to right, ${black01}, ${black01});
  `}
`;
